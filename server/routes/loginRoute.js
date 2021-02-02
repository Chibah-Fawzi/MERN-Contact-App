const loginController = require('../controllers/loginController')
const passport = require('passport')
const { body, validationResult } = require('express-validator');


loginController.authStrat(passport)


function init(router) {
    router.route('/login').post(passport.authenticate('local'), loginController.Login)
    router.route('/logout').get(function (req, res) {
        req.logout();
        res.redirect('/home');
    })
}

module.exports.init = init; 