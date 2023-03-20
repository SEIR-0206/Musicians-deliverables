const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const myMusicians = await Musicians.find({})
        console.log(myMusicians);
        const context = {
            musicians: myMusicians
        }
        res.render('musicians/index.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})

module.exports = router;