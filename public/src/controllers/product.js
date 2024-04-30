const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);


const getAllProducts = async (req, res) => {
    try {
      // Lấy tất cả các sản phẩm từ cơ sở dữ liệu
      let products = await models.Products.findAll();
  
      // Trả về danh sách các sản phẩm dưới dạng JSON
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi Backend" });
    }
  };
  
module.exports = {getAllProducts}
  