const express = require('express');
const { getAllProducts } = require('../controllers/product');
const { createPayment, dbPayment } = require('../controllers/order');
const routeOrder = express.Router();


routeOrder.post('/order', createPayment)
routeOrder.post('/payment', dbPayment)



module.exports = routeOrder