const http = require("http");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).send('<h1>Error. Page not found!</h1>');
});

app.listen(3002);
