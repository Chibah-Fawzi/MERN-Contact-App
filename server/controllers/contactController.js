const ContactModel = require('../models/contactModel')
const UserModel = require('../models/userModel')

function getContacts(req, res) {
    UserModel.findById(req.params.id).populate('contactList')
        .exec().then(data => res.json(data))
        .catch(err => console.log(err))
}

function createContact(req, res) {
    var u = req.body
    const contacts = new ContactModel({ fullname: u.fullname, phone_number: u.phone_number, email: u.email, imgUrl: u.imgUrl, user: u.user });

    contacts.save(function (err, result) {
        if (err) return handleError(err);
        UserModel.findByIdAndUpdate(u.user, { $push: { contactList: result } }).then(() => {
            res.json({
                success: true,
                contacts: result
            })
        })

    });
}

const contactController = {
    getContacts: getContacts,
    createContact: createContact
}

module.exports = contactController