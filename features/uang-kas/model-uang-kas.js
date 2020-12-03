const db = require("../../configs/database.js");
let model = {};
/**
 * 
 * @param {*} data adalah array form untuk set
 * disini sistem melakukan insert data
 */
model.create = (data) => {
    return new Promise((resolve, reject)=>{
        db.query("INSERT INTO uang_kas SET ?", data, (err, result)=>{
            if(err) return reject(err)
            else return resolve(result)
        })
    })
}

/**
 * 
 * @param {*} page 
 * @param {*} perpage 
 * @param {*} user_id
 * 
 * disini mengambil semua data bedasarkan page perpage
 */
model.get = (page, perpage, user_id) => {
  var offset = perpage*page;
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM uang_kas where user_id = ? limit ? offset ?",
      [user_id,perpage, page],
      (err, result) => {
        if (err) return reject(err)
        else resolve(result)
      }
    )
  })
}
/**
 * 
 * @param {*} id 
 * mengembalikan data bedasarkan id
 */
model.getID = (id) => {
  
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM uang_kas where uang_kas_id=?",
      [id],
      (err, result) => {
        if (err) return reject(err)
        else resolve(result)
      }
    )
  })
}

/**
 * 
 * @param {*} id 
 * @param {*} data 
 * id dari uang_kas, dan data debit credit
 */
model.udpate = (id, data) => {
  return new Promise((resolve, reject)=>{
      db.query("UPDATE uang_kas SET ? where uang_kas_id="+id, data, (err, result)=>{
          if(err) return reject(err)
          else return resolve(result)
      })
  })
}

/**
 * 
 * @param {*} id 
 * id yang akan didelete
 */
model.delete = (id) => {
  return new Promise((resolve, reject)=>{
      db.query("DELETE from uang_kas WHERE uang_kas_id = ?", [id], (err, result)=>{
          if(err) return reject(err)
          else return resolve(result)
      })
  })
}

module.exports = model
