var db = require('../config/db');

const schema = require('./schema/userSchema')

const User = db.model('User', schema);


module.exports = User