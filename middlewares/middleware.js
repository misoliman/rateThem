const Restaurant = require("../models/restaurants")
const Review = require("../models/review")


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.originalUrl = req.originalUrl
        req.flash("error", "You must be signed in first!")
        return res.redirect(`/login`)
    }
    next()
}

module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params
    const restaurant = await Restaurant.findById(id)
    if (!restaurant.author.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that!")
        return res.redirect(`/restaurants/${id}`)
    }
    next()
}

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params
    const review = await Review.findById(reviewId)
    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that!")
        return res.redirect(`/restaurants/${id}`)
    }
    next()
}

module.exports.addTimestamp = (req, res, next) => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    req.requestTime = `${day}/${month}/${year}`;
    next();
};





