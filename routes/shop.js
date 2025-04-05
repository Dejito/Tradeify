const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=> {
    console.log("oga mario");
    res.send('<h1>Welcome to dejito shop homepage </h1>');
});

module.exports = router;