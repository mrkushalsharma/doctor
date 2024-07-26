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
        type: String,
        required: true
    },
    appointmentDate: {
        type: String,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

const Appoinment = model('Appoinment', AppoinmentSchema)

module.exports = Appoinment;
