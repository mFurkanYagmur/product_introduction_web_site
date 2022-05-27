const mongoose = require('mongoose')

const Urun = require('./models/Urun')

mongoose.connect('mongodb://localhost/product_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

Urun.create({
    image: 'https://6rk3rbju.rocketcdn.com/image/cdndata/1/202102/200.17.01.0082/8680214237472-1.jpg',
    title: 'Özdilek Spiderman Night Tek Kişilik Disney Lisanslı Çocuk Pike Takımı',
    price: 450,
    raiting: 8,
}, (err, data) => {
    console.log(err, data)
})