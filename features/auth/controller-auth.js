const express = require("express")
const router = express.Router()
const model = require("./model-auth")
const jwt = require("jsonwebtoken")
require('dotenv').config()

/**routing post auth/login */
router.post("/login", async (req, res) => {
  try {
    var a = await model.login(req.body.username, req.body.password)
    
    var token = jwt.sign(JSON.stringify(a[0]),process.env.ACCESS_TOKEN_SECRET)
    res.status(200).json(token)
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
