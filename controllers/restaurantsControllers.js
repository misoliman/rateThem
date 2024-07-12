
const { cloudinary } = require("../cloudinary")
const Restaurant = require("../models/restaurants")
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding")
const mapBoxToken = process.env.MAPBOX_TOKEN
const geoCoder = mbxGeocoding({ accessToken: mapBoxToken })



module.exports.showRestaurants = async (req, res) => {
    const restaurants = await Restaurant.find({})
    res.render("index", { restaurants, newPage: false })
}

module.exports.getNewForm = (req, res) => {
    res.render("new", { newPage: true })
}

module.exports.createNewRestaurant = async (req, res) => {

    const geoData = await geoCoder.forwardGeocode({
        query: req.body.location,
        limit: 1
    }).send()
    const holderImage = "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const bodyData = req.body
    bodyData.geometry = geoData.body.features[0].geometry
    const images = []

    if (req.files.length == 0) {
        images.push({ url: holderImage, filename: "holder" })
    } else {
        for (let file of req.files) {
            const image = { url: file.path, filename: file.filename }
            images.push(image)
        }
    }
    bodyData.image = images
    bodyData.createdOn = req.requestTime
    const restaurant = new Restaurant(bodyData)
    restaurant.author = req.user._id
    await restaurant.save()
    req.flash("success", "Successfully added a new restaurant!")
    res.redirect(`/restaurants/${restaurant.id}`)
}

module.exports.showRestaurant = async (req, res) => {

    const { id } = req.params
    const restaurant = await Restaurant.findById(id).populate(
        {
            path: "reviews",
            populate: {
                path: "author"
            }
        })
        .populate("author")
    if (!restaurant) {
        req.flash("error", "Cannot find that restuarant")
        return res.redirect("/restaurants")
    }
    res.render("show", { restaurant })
}

module.exports.editRestaurantForm = async (req, res) => {
    const { id } = req.params
    const restaurant = await Restaurant.findById(id)

    if (!restaurant) {
        req.flash("error", "Cannot find that restuarant")
        return res.redirect("/restaurants")
    }
    res.render("edit", { restaurant })
}

module.exports.editRestaurant = async (req, res) => {
    const { id } = req.params
    const bodyData = req.body
    const restaurant = await Restaurant.findById(id)
    console.log("restaurant before modifiaction : ", restaurant)
    const fileToDelete = bodyData.deleted || []

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, bodyData)
    for (let imageData of req.files) {
        const image = { url: imageData.path, filename: imageData.filename }
        updatedRestaurant.image.push(image)
    }
    await updatedRestaurant.save()

    for (let i = 0; i < fileToDelete.length; ++i) {
        if (i !== restaurant.image.length - 1) {
            await cloudinary.uploader.destroy(fileToDelete[i])
            await Restaurant.updateOne(
                { 'image.filename': fileToDelete[i] },
                {
                    $pull: {
                        image: { filename: fileToDelete[i] }
                    }
                }
            );
        }
    }


    if (restaurant.image.length === fileToDelete.length) {
        req.flash("error", "Successfully updated a restaurant, but restaurant must have a least one image")
        return res.redirect(`/restaurants/${id}`)
    }

    req.flash("success", "Successfully updated a restaurant")
    res.redirect(`/restaurants/${id}`)

}

module.exports.deleteRestaurant = async (req, res) => {
    const { id } = req.params
    await Restaurant.findByIdAndDelete(id)
    req.flash("success", "Successfully deleted a restaurant")
    res.redirect("/restaurants")
}