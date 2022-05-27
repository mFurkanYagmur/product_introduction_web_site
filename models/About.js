const mongoose = require('mongoose')

const AboutScheme = new mongoose.Schema({
    title: {type: String, required: true},
    content:{type: String, required: true},
    image: {type: String, required: true}
})

module.exports = mongoose.model('About', AboutScheme)