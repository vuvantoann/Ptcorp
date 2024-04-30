const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const crypto = require("crypto");
const dayjs = require("dayjs");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const createPayment = async (req, res) => {
  try {
    const ipAddr =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    const tmnCode = "5HN1EJZE"; // Thay bằng VNP_TMN_CODE của bạn
    const secretKey = "MWYWNPNKWAOQLZZHHPPAUEGPYXTALHUT"; // Thay bằng VNP_SECRET_KEY của bạn
    const vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html"; // URL của VNPay
    const returnUrl = "http://localhost:3000/succcess"; // URL trả về sau khi thanh toán

    const date = dayjs();
    const createDate = date.format("YYYYMMDDHHmmss");
    const orderId = date.format("DDHHmmss");
    const orderInfo = "Thanh toán sản phẩm"; // Thông tin đơn hàng
    const orderType = "order"; // Loại đơn hàng
    let locale = req.body.language || "vn"; // Ngôn ngữ mặc định là tiếng Việt
    if (locale === null || locale === "") {
      locale = "vn";
    }
    const currCode = "VND"; // Mã tiền tệ
    // Lấy thông tin đơn hàng từ req.body hoặc từ cơ sở dữ liệu
    const {productId, amount } = req.body;

    // Các tham số cần thiết cho VNPay
    const vnp_Params = {
      vnp_Version: "2.1.0",
      vnp_Command: "pay",
      vnp_TmnCode: tmnCode, // TmnCode được lấy từ biến môi trường
      vnp_Locale: locale,
      vnp_CurrCode: currCode,
      vnp_TxnRef: orderId,
      vnp_OrderInfo: orderInfo,
      vnp_OrderType: orderType,
      vnp_Amount: amount * 100, // Chuyển số tiền sang đơn vị của VNĐ, ở đây là cents
      vnp_ReturnUrl: returnUrl,
      vnp_IpAddr: ipAddr,
      vnp_CreateDate:   createDate, // Ngày giờ tạo giao dịch
    };

    // Sắp xếp các tham số theo thứ tự bảng chữ cái
    const orderedParams = Object.keys(vnp_Params)
      .sort()
      .reduce((obj, key) => {
        obj[key] = vnp_Params[key];
        return obj;
      }, {});

    const queryString = new URLSearchParams(orderedParams).toString();

    const hmac = crypto.createHmac("sha512", secretKey); // Secret key được lấy từ biến môi trường
    hmac.update(queryString, "utf8");
    const signed = hmac.digest("hex");
    const signedQueryString = `${queryString}&vnp_SecureHashType=SHA512&vnp_SecureHash=${signed}`;

    const paymentUrl = `${vnpUrl}?${signedQueryString}`;

  
    // Trả về URL thanh toán cho client
    res.status(200).json({ paymentUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi Backend" });
  }
};

const dbPayment = async (req, res) => {
  try {
    const { product_id, total_amount, user_id } = req.body; // Lấy thông tin sản phẩm và số tiền từ req.body

    // Tạo mới thanh toán và lưu vào cơ sở dữ liệu
    const newPayment = await models.Payments.create({
      id: uuidv4(),
      product_id: product_id,
      payment_date: moment(),
      total_amount: total_amount,
      user_id:user_id,
      // Thêm các thông tin khác nếu cần
    });

    res.status(200).json({ message: "Thanh toán thành công." }); // Trả về thông báo thành công
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi Backend" }); // Trả về thông báo lỗi
  }
};

module.exports = { createPayment,dbPayment };
