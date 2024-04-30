const express = require("express");
const routeUser = require("./routeUser");
const routeProduct = require("./routeProduct");
const routeOrder = require("./routeOrder");
const routes = express.Router();

routes.use("/user", routeUser);
routes.use("/product", routeProduct);
routes.use("/order", routeOrder);

module.exports = routes;
