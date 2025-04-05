const http = require('http');

const path = require('path');

const express = require('express');

const app = express();


const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
    // res.status(404).send('<h1>page not found</h1>');
});

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
