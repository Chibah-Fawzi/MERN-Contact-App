const userController = require('../controllers/userController')

function init(router) {
    router.route('/register').post(userController.CreateUser)
    router.route('/users').get(userController.getUsers)

}

module.exports.init = init; 