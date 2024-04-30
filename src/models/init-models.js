const DataTypes = require("sequelize").DataTypes;
const _Payments = require("./Payments");
const _Products = require("./Products");
const _Users = require("./Users");

function initModels(sequelize) {
  const Payments = _Payments(sequelize, DataTypes);
  const Products = _Products(sequelize, DataTypes);
  const Users = _Users(sequelize, DataTypes);

  Payments.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(Payments, { as: "Payments", foreignKey: "product_id"});

  return {
    Payments,
    Products,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
