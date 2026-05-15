const path = require('path');

const isAuth = require('../middleware/is-auth');






const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/',isAuth, shopController.getIndex);

router.get('/products',isAuth, shopController.getProducts);

router.get('/products/:productId', isAuth, shopController.getProduct);

router.get('/cart',isAuth, shopController.getCart);

router.post('/cart',isAuth, shopController.postCart);

router.post('/cart-delete-item',isAuth, shopController.postCartDeleteProduct);

router.post('/create-order',isAuth, shopController.postOrder);

router.get('/orders',isAuth, shopController.getOrders);

module.exports = router;
