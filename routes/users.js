const express = require("express")
const router = express.Router()
const catchAsync = require("../utils/catchAsync")
const passport = require("passport")
const {
    registerUserForm,
    registerUser,
    loginForm,
    userLogin,
    logout } = require("../controllers/usersControllers")



router.route("/register")
    .get(registerUserForm)
    .post(catchAsync(registerUser));


router.route("/login")
    .get(loginForm)
    .post(passport.authenticate("local",
        { failureFlash: true, failureRedirect: "/login", keepSessionInfo: true }),
        userLogin);


router.route("/logout")
    .get(logout);


module.exports = router