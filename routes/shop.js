const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('got to shop homepage');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.send('<h1>Welcome to dejito shop homepage </h1>');
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

});

module.exports = router;