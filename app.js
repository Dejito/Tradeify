

const express = require('express')

const app = express();

app.use('/joor', (req, res, next)=> {
    console.log("got to second midware");
    res.send("<h2>Hello from the joor side</h2>");
});

app.use('/', (req, res, next)=> {
    console.log("got to first midware");
    res.send("<h2>Hello from the / side</h2>");
    next();
});



// const server = http.createServer(app);

app.listen(4001);
