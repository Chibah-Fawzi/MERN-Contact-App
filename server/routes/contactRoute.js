const contactController = require('../controllers/contactController')
const { isAuthenticated } = require('../config/utils')
function init(router) {
    router.route('/contacts').post(isAuthenticated, contactController.createContact)
    router.route('/contacts/:id').get(isAuthenticated, contactController.getContacts)

}

module.exports.init = init; 