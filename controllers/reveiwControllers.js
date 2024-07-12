const Restaurant = require("../models/restaurants")
const Review = require("../models/review")


module.exports.createReview = async (req, res) => {
    const review = req.body
    const newReview = new Review(review)
    const { restaurantId } = req.params
    const restaurant = await Restaurant.findById(restaurantId)
    newReview.author = req.user._id
    restaurant.reviews.push(newReview)
    await newReview.save()
    await restaurant.save()
    req.flash("success", "Posted a new review")
    res.redirect(`/restaurants/${restaurantId}`)
}

module.exports.deleteReview = async (req, res) => {
    const { restaurantId, reviewId } = req.params
    await Review.findByIdAndDelete(reviewId)
    await Restaurant.findByIdAndUpdate(restaurantId, { $pull: { reviews: reviewId } })
    req.flash("success", "Successfully removed a review")
    res.redirect(`/restaurants/${restaurantId}`)
}
