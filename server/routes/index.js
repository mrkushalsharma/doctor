const express = require('express'),
    router = express.Router(),
    Appointment = require('../model/Appointment'),
    config = require("../config");

router.get('/', (req, res) => {
    res.send('Hello from API');
});

router.post('/book-appointment', async (req, res) => {
    try {
        let payload = req?.body?.datas;
        let appointment = new Appointment({
            fullName: payload.fullName,
            phoneNumber: payload.phoneNumber,
            services: payload.services,
            doctorName: payload.doctorName,
            appointmentDate: config.appointmentDate,
            appointmentTime: payload.appointmentTime,
            timestamp: (new Date()).toISOString(),
        });

        await appointment.save();
        let message = "Appointment Booked Successfully.";
        console.log(message);
        res.json({
            status: true,
            message
        });
    } catch (ex) {
        let message = "Error Occurred while Booking Appointment.";
        console.log(message);
        res.json({
            status: false,
            message
        });
    }
});

module.exports = router;