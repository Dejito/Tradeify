const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsController.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProducts);

// exports.routes = router;
// exports.products = products;

module.exports = router;
