const express = require('express')
const router = express.Router()
const About = require('../models/About')
const Urunler = require('../models/Urun')
const Slider = require('../models/Slider')

router.get('/', (req,res) => {
    Slider.find({}).then(sliders => {
        res.render('site2/', {sliders: sliders})
    })
})

router.get('/about', (req,res) => {
    About.find({}).then(about => {
        res.render('site2/about', {about: about})
    })
})

router.get('/urunlerimiz', (req, res) => {
    Urunler.find({}).then(urun => {
        res.render('site2/urunlerimiz', {urun: urun})
    })
})

router.get('/yeniUrun', (req, res) => {
    Urunler.find({}).then(yeniUrunler => {
        res.render('site2/yeniUrun', {yeniUrunler: yeniUrunler})
    })
})

module.exports = router