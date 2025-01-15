const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=> {
    console.log("got to first midware");
    res.send("<h2>Hello from the shop side</h2>");
    next();
});

module.exports = router;