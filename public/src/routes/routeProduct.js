const express = require('express');
const { getAllProducts } = require('../controllers/product');
const routeProduct = express.Router();


routeProduct.get('/getallproducts', getAllProducts)



module.exports = routeProduct