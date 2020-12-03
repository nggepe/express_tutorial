const express = require("express")
const model = require("./model-uang-kas");

const router = express.Router();

/** routing method get */
router.get("/", async (req, res) => {
  try {
    result = await model.get(0, 3, req.tokenData.user_id)
    res.status(200).json(result) 
  } catch (err) {
    console.log(err)
    res.json(500).json(err)
  }
})

router.get("/:id", async (req, res)=>{
  try {
    result = await model.getID(req.params['id'])
    res.status(200).json(result[0])
  } catch (err) {
    console.log(err)
    res.json(500).json(err)
  }
})

/** routing method post */
router.post("/", async (req, res) => {
  try {
    let data = { debit: req.body['debit'], credit: req.body['credit'], user_id: req.tokenData.user_id }
    await model.create(data)
    res.status(200).json("Success")
    
  } catch (err) {
    console.log(err)
    res.json(500).json(err)
  }
})

/** routing method put */
router.put("/:id", async (req, res) => {
  try {
    await model.udpate(req.params['id'], req.body)
    res.status(200).json("Success")
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

/** routing method delete */
router.delete("/:id", async (req, res) => {
  try {
    await model.delete(req.params['id'])
    res.status(200).json("Success")
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
