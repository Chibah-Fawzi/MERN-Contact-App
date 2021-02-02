var db = require('../../config/db');

const Schema = db.Schema;

var userSchema = Schema({
    fullname: String,
    email: String,
    password: String,
    imgUrl: String,
    contactList: [{
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    }],
});


module.exports = userSchema;