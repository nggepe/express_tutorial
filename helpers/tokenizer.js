require("dotenv").config();
const jwt = require("jsonwebtoken");

let tokenize = {};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 * verifikasi token dan mengirim ke middleware selanjutnya dengan variabel tokenData. 
 * Dan mengirimkan error jika terjadi error
 * 
 */
tokenize.verify = (req, res, next) => {
  try {
    var data = jwt.verify(
      req.headers["authorization"], //dari header request 
      process.env.ACCESS_TOKEN_SECRET // dari env ACCESS_TOKEN_SECRET yang sudah kita pakai untuk signature pada tutorial #3
    )
    req.tokenData = data //mengirim data ke middleware selanjutnya dengan variabel tokenData
    next()
  } catch (error) {
    console.log(error) //print error
    res.status(500).json(error) //respon error
  }
}

module.exports = tokenize;
