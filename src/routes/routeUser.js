const express = require('express');
const { login, register } = require('../controllers/user');
const routeUser = express.Router();


routeUser.post('/login', login)
routeUser.post('/register', register)



module.exports = routeUser