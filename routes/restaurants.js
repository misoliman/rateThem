const express = require("express")
const router = express.Router()
const catchAsync = require("../utils/catchAsync")
const { validateRestaurant } = require("../models/joiValidate")
const { isLoggedIn, isAuthor, addTimestamp } = require("../middlewares/middleware")
const
    {
        showRestaurants,
        getNewForm,
        createNewRestaurant,
        showRestaurant,
        editRestaurantForm,
        editRestaurant,
        deleteRestaurant
    }
        = require("../controllers/restaurantsControllers")
const multer = require("multer")
const { storage } = require("../cloudinary")
const upload = multer({ storage })


router.route("/")
    .get(catchAsync(showRestaurants))
    .post(isLoggedIn, upload.array("image"), validateRestaurant, addTimestamp, catchAsync(createNewRestaurant))


router.route("/new")
    .get(isLoggedIn, getNewForm)


router.route("/:id/edit")
    .get(isLoggedIn, isAuthor, catchAsync(editRestaurantForm))


router.route("/:id")
    .get(catchAsync(showRestaurant))
    .put(isLoggedIn, isAuthor, upload.array("image"), validateRestaurant, catchAsync(editRestaurant))
    .delete(isLoggedIn, isAuthor, catchAsync(deleteRestaurant))


module.exports = router
