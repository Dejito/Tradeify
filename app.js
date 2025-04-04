const http = require('http');

const express = require('express');

const app = express();


const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);


app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
