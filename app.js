if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express")
const session = require("express-session")
const mongoose = require("mongoose")
const path = require("path")
const ejsMate = require("ejs-mate")
const methodOverride = require("method-override")
const ExpressErrors = require("./utils/expressErrors")
const flash = require("connect-flash")
const passport = require("passport")
const localStrategy = require("passport-local")
const User = require("./models/users")
const expressMongoSanitize = require("express-mongo-sanitize")
const helmet = require("helmet")
const MongoStore = require("connect-mongo")


const restaurantsRoutes = require("./routes/restaurants")
const reviewsRoutes = require("./routes/reviews")
const userRoutes = require("./routes/users")



const port = 3000
const altalsDB = process.env.DB_URL
const localDB = process.env.DB_LOCAL


mongoose.connect(altalsDB)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const app = express()

app.engine("ejs", ejsMate)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")));

const store = new MongoStore({
    mongoUrl: localDB,
    secret: "thisisthesecretmessage",
    touchAfter: 24 * 60 * 60
})
const sessionConfig = {
    store,
    name: "session",
    secret: "thisisthesecretmessage",
    resave: false,
    saveUninitialized: false,
    cookie: {
        //secure: true,                    // will only work on secure http (https)
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }

}

app.use(expressMongoSanitize())

app.use(session(sessionConfig))
app.use(flash())
app.use(helmet())

const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://api.tiles.mapbox.com/",
    "https://api.mapbox.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://code.jquery.com/jquery-3.5.1.slim.min.js"
];

const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://api.mapbox.com/",
    "https://api.tiles.mapbox.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
];

const connectSrcUrls = [
    "https://api.mapbox.com/",
    "https://a.tiles.mapbox.com/",
    "https://b.tiles.mapbox.com/",
    "https://events.mapbox.com/",
];

const fontSrcUrls = [];

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            connectSrc: ["'self'", ...connectSrcUrls],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            styleSrcElem: ["'self'", "'unsafe-inline'", ...styleSrcUrls], // Added styleSrcElem
            workerSrc: ["'self'", "blob:"],
            objectSrc: [],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://res.cloudinary.com/djgkoioek/", // Should match your Cloudinary account
                "https://images.unsplash.com/",
                "https://images.pexels.com/"
            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        },
    })
);


app.use(passport.initialize())
app.use(passport.session())

passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.locals.userLogged = req.user
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    next()
})

app.use("/restaurants", restaurantsRoutes)
app.use("/restaurants/:restaurantId/reviews", reviewsRoutes)
app.use("/", userRoutes)

app.get("/", (req, res) => {
    res.render("home")
})



app.all("*", (req, res, next) => {
    const err = new ExpressErrors("Page Not Found", 404)
    next(err)
})

app.use((err, req, res, next) => {
    const { message = "SOMETHING WENT WRONG", statusCode = 500 } = err
    console.log(err)
    res.status(statusCode).render("error", { message })
})




app.listen(port, () => {
    console.log("Server is up and running on port ", port)
})


