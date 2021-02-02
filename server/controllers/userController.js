const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt');

function getUsers(req, res) {
    UserModel.find((err, data) => {
        if (err) throw (err)

        res.json(data)
    })
}

function CreateUser(req, res) {
    var u = req.body
    const users = new UserModel({ fullname: u.fullname, email: u.email, password: u.password, imgUrl: u.imgUrl });
    bcrypt.hash(u.password, 10, function (err, hash) {
        if (err) throw err
        users.password = hash
        if (u.email != '' && u.email) {
            UserModel.findOne({ email: u.email }).then((ress) => {
                if (ress) {
                    res.json({
                        success: false,
                        msg: 'Email already exists!'
                    })
                } else {
                    users.save(function (err, result) {
                        if (err) throw err;
                        res.json({
                            success: true,
                            users: result
                        })
                    });
                }
            }).catch(err => console.log(err.message))

        }
    });
}
const userController = {
    getUsers: getUsers,
    CreateUser: CreateUser
}

module.exports = userController