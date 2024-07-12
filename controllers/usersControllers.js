const User = require("../models/users")

module.exports.registerUserForm = (req, res) => {
    res.render("register")
}

module.exports.registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const user = new User({ email, username })
        const newUser = await User.register(user, password)
        req.login(newUser, err => {
            if (err) return next(err);
            req.flash("success", `Welcome to our rating platform, ${username}!`);
            res.redirect("/restaurants");
        });
    } catch (err) {
        req.flash("error", err.message)
        res.redirect("/register")
    }
}

module.exports.loginForm = (req, res) => {
    res.render("login")
}

module.exports.userLogin = (req, res) => {
    const returnTo = req.session.originalUrl || "/restaurants"
    req.flash("success", `Welcome back ${req.user.username} !!`)
    res.redirect(returnTo)

}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Goodbye, see you soon !!")
        res.redirect("/");
    });
}