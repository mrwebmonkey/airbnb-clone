const express = require('express');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');

const {
    signUp,
    logIn,
    logOut
} = require('../controllers/users.js')

// signup rote
router.route('/signup')
    // rendering signup page
    .get((req, res) => {
        res.render('users/signup.ejs');
    })
    // receiving signup page data
    .post(wrapAsync(signUp));

//login route
router.route('/login')
    // rendering login page
    .get((req, res) => {
        res.render('users/login.ejs');
    })
    // receiving login page data
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        }) ,
        logIn
    );

// logout route
router.get('/logout', logOut);

module.exports = router;