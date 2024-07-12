const express = require("express")
const router = express.Router({ mergeParams: true })
const catchAsync = require("../utils/catchAsync")
const { validateReview } = require("../models/joiValidate")
const { isLoggedIn, isReviewAuthor } = require("../middlewares/middleware")
const { createReview, deleteReview } = require("../controllers/reveiwControllers")



router.route("/")
    .post(isLoggedIn, validateReview, catchAsync(createReview))


router.route("/:reviewId")
    .delete(isLoggedIn, isReviewAuthor, catchAsync(deleteReview))

module.exports = router