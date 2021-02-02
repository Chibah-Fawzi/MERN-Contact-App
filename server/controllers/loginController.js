const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

function Login(req, res) {
    res.json(req.user)
}

function authStrat(passport) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        function (email, password, done) {
            UserModel.findOne({ email: email }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                bcrypt.compare(password, user.password, function (err2, results) {
                    if (err2) throw err2

                    if (!results) {
                        return done(null, false, { message: 'Incorrect password.' });
                    } else {
                        return done(null, user);
                    }
                });
            });
        }
    ));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        UserModel.findById(id, function (err, user) {
            done(err, user);
        });
    });
}

const loginController = {
    Login: Login,
    authStrat: authStrat
}

module.exports = loginController;

