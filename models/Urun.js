const mongoose = require('mongoose')

const UrunScheme = new mongoose.Schema({
    image: {type: String, required: true},
    title: {type: String, required: true},
    price:{type: Number, required: true},
    rating:{type:Number, required:true}
})

module.exports = mongoose.model('Urun', UrunScheme)