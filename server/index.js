const express = require('express'),
    app = express(),
    mongoose = require('./dbConnection'),
    config = require("./config"),
    cors = require('cors'),
    routes = require('./routes')

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(config.HTTP_PORT, console.log(`App Listening to port ${config.HTTP_PORT}`));