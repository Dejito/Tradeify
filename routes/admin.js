const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/add-product', (req, res, next)=> {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // next();
});

router.post('/product', (req, res, next) => {
    console.log('body parser', req.body);
    res.redirect('/');
});


module.exports = router;