const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars').engine
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const HandleBars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

mongoose.connect('mongodb://127.0.0.1/product_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.static('public'))

app.engine('handlebars', exphbs({
    handlebars : allowInsecurePrototypeAccess(HandleBars)
}))

// app.engine('handlebars', exphbs.engine())

app.set('view engine','handlebars')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const main = require('./routes/main')
app.use('/', main)


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})