const Contact = require('../model/Contact');

const express = require('express'),
    router = express.Router(),
    Appointment = require('../model/Appointment'),
    config = require("../config");

router.get('/', (req, res) => {
    res.send('Hello from API');
});

router.post('/book-appointment', async (req, res) => {
    try {
        let payload = req?.body;
        console.log(payload.fullName)
        let appointment = new Appointment({
            fullName: payload.fullName,
            phoneNumber: payload.phoneNumber,
            services: payload.services,
            doctorName: payload.doctorName,
            appointmentDate: payload.appointmentDate,
            appointmentTime: payload.appointmentTime,
            timestamp: (new Date()).toISOString(),
        });

        await appointment.save();
        let message = "Appointment Booked Successfully.";
        console.log(message);
        res.json({
            success: true,
            message
        });
    } catch (ex) {
        let message = "Error Occurred while Booking Appointment.";
        console.log(ex);
        res.json({
            success: false,
            message
        });
    }
});


router.get('/appointments', async (req, res) => {
    try {
        let appointments = await Appointment.find();
        let message = "Appointment Data Fetched Successfully.";
        console.log(appointments);
        res.json({
            success: true,
            datas: appointments,
            message
        });
    } catch (ex) {
        let message = "Error Occurred while Fetching Appointment Data.";
        console.log(message);
        res.json({
            success: false,
            message
        });
    }
});

router.post('/contact', async (req, res) => {
    try {
        let payload = req?.body;
        let contact = new Contact({
            fullName: payload.fullName,
            email: payload.email,
            subject: payload.subject,
            message: payload.message,
            timestamp: (new Date()).toISOString(),
        });

        await contact.save();
        let message = "Conatct us added Successfully.";
        console.log(message);
        res.json({
            success: true,
            message
        });
    } catch (ex) {
        let message = "Error Occurred while adding conatct us.";
        console.log(ex);
        res.json({
            success: false,
            message
        });
    }
});

router.get('/contact', async (req, res) => {
    try {
        let contacts = await Contact.find();
        let message = "Contact Us Data Fetched Successfully.";
        console.log(contacts);
        res.json({
            success: true,
            datas: contacts,
            message
        });
    } catch (ex) {
        let message = "Error Occurred while Fetching Contact Us Data.";
        console.log(message);
        res.json({
            success: false,
            message
        });
    }
});

module.exports = router;