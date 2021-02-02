var db = require('../../config/db');

const Schema = db.Schema;

var contactSchema = Schema({
    fullname: String,
    phone_number: String,
    email: String,
    imgUrl: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});


module.exports = contactSchema;