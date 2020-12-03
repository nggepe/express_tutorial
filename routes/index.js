const express = require('express')
const router = express.Router()
const tokenizer = require('../helpers/tokenizer')

/**routing ke controoler-auth */
router.use('/auth', require('../features/auth/controller-auth'))

/**routing ke controoler-uang-kas dengan verifikasi token*/
router.use('/uang-kas', (req, res, next)=>{
    tokenizer.verify(req, res, next)
} , require('../features/uang-kas/controller-uang-kas'))

module.exports = router;