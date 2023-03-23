const express =require('express');
const { Snowboarders } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const mySnowboarders = await Snowboarders.find({})
        console.log(mySnowboarders);
        const context = {
            snowboarders: mySnowboarders
        }
        res.render('snowboarders/index.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
});

router.get('/new', (req, res) => {
    res.render('snowboarders/new.ejs');
});

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const newSnowboarder = await Snowboarders.create(req.body);
        console.log(newSnowboarder);
        res.redirect('/')
    } catch(err) {
        console.log(err);
        return next();
    }
})

module.exports = router;