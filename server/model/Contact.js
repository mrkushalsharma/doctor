const { Schema, model } = require('mongoose')

const ContactSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

const Contact = model('Contact', ContactSchema)

module.exports = Contact;
