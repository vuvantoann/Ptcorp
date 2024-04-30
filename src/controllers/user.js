const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await models.Users.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      const checkPass = bcrypt.compareSync(password, user.password);
      if (checkPass) {
        let token = jwt.sign({ user }, "BAOMAT", { expiresIn: '1d' })
        succesCode(res, {token, user}, "Đăng nhập thành công");
      } else {
        failCode(res, "Pasword không chính xác");
      }
    } else {
      failCode(res, "Email không chính xác");
    }
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      let existingUser = await models.Users.findOne({
        where: {
          email: email,
        },
      });

      if (existingUser) {
        failCode(res, "Email đã tồn tại trong hệ thống");
        return;
      }
      let hashedPassword = bcrypt.hashSync(password, 10);
      let newUser = await models.Users.create({
        id:uuidv4(),
        username: username,
        email: email,
        password: hashedPassword,
      });
  
      let token = jwt.sign({ user: newUser }, "BAOMAT", { expiresIn: '1d' });
  
      succesCode(res, { token, user: newUser }, "Đăng ký thành công");
    } catch (error) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
module.exports = { login , register};