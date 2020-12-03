const db = require("../../configs/database.js");
let model = {};
/**
 * 
 * @param {*} username parameter dari post
 * @param {*} password parameter dari post
 * 
 * password di enkripsi di bawah ini
 */
model.login = (username, password) => {
  password = require("crypto").createHash("md5").update(password).digest("hex")
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT user_id, username, nama_lengkap FROM mst_user WHERE username = ? AND password = ?",
      [username, password],
      (err, result) => {
        if (err) return reject(err)
        else resolve(result)
      }
    );
  });
};

module.exports = model
