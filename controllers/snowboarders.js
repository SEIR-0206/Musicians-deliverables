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

module.exports = router;