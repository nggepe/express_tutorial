const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors()) // cross origin resource share, ini untuk permission antar api.
app.use(bodyParser.json()) //untuk parsing body, kita bisa menggunakan url-encode atau application/json
app.use(bodyParser.urlencoded({ extended: true }))
/** routing ke routes/index.js */
app.use('/', require('./routes'))

app.listen(3000, ()=>{console.log("sedang mendengar port: 3000")})