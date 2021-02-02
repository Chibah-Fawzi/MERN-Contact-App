var db = require('../config/db');

const schema = require('./schema/contactSchema')

const Contact = db.model('Contact', schema);


module.exports = Contact