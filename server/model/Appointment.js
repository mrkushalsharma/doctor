const { Schema, model } = require('mongoose')

const AppoinmentSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    services: {
        type: String,
        required: false
    },
    doctorName: {
        type: Boolean,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: Date,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

const Appoinment = model('Appoinment', AppoinmentSchema)

module.exports = Appoinment;
