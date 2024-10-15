const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

const admin = require('./main/admin.js')
const user = require('./main/user.js')
const storeadmin= require('./main/storeadmin.js')
const delivery=require('./main/delivery.js')

app.use(cors())
app.use(express.json())



app.use('/user', user)
app.use('/admin', admin)
app.use('/storeadmin',storeadmin)
app.use('/delivery',delivery)

app.use('/uploads', express.static('uploads'))
app.listen(port)
module.exports = app