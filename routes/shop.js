const path = require('path');

const express = require('express');

const shopRoute = require('../controllers/products')
// const rootDir = require('../util/path');
// const adminData = require('./admin');

const router = express.Router();

router.get('/', shopRoute.getProducts);

module.exports = router;
