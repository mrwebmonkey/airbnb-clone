const User = require('../models/user');

module.exports.signUp = async (req, res) => {
    try {
        let {username, email, password} = req.body;
        const newUser = await new User({email, username});
        const registerUser = await User.register(newUser, password);
        req.login(registerUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "welcome to wanderlust !");
            res.redirect('/listings');
        });
    }catch (e) {
        req.flash("error", e.message);
        res.redirect('/signup');
    }
}

module.exports.logIn = async (req, res) => {
    req.flash("success", "welcome back to wanderlust !");
    let redirectUrl = res.locals.redirectUrl || '/listings'
    res.redirect(redirectUrl);
}

module.exports.logOut = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("error", "you logout now !");
        res.redirect('/listings');
    });
}