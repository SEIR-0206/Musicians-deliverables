const express = require('express');
const router = express.Router();
const { Musicians } = require('../models');

let mySeedData = [
    {
        name: "Keith Richards",
        image: "https://www.soundaffects.com/blog/wp-content/uploads/2014/08/tumblr_n9oi9jo6xR1thoekio1_500.jpg"
    }, {
        name: "Prince",
        image: "https://www.soundaffects.com/blog/wp-content/uploads/2014/08/tumblr_n90ek1GlKF1thoekio1_500.jpg"
    }, {
        name: "John Mayer",
        image: "https://www.soundaffects.com/blog/wp-content/uploads/2014/08/tumblr_n9sxudWDyC1thoekio1_1280.jpg"
    }, {
        name: "Matt Bellamy",
        image: "https://www.soundaffects.com/blog/wp-content/uploads/2014/08/tumblr_n9mbgxN2121thoekio1_400.jpg"
    }, {
        name: "JP",
        image: "https://i.imgur.com/N1GVuj6.jpg",
        instrument: "An incredible slug"
    }
]

router.get('/', async (req, res, next) => {
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
});

router.get('/seed', async (req, res, next) => {
    try {
        const deletedOldOnes = await Musicians.deleteMany({});
        const addArtists = await Musicians.insertMany(mySeedData);
        console.log(addArtists);
        res.redirect('/musicians')
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/new', (req, res) => {
    res.render('musicians/new.ejs');
});

router.get('/:id', async (req, res, next) => {
    try {
        console.log(req.params)
        // You can find the name and find will return all of the names that match but always in an array, even if it's only finding one of them. Or you can do findOne to find the first one and only that one and it'll be an object
        // const musician = await Musicians.find({name: req.params.name});
        const musician = await Musicians.findById(req.params.id);
        // const musician = await Musicians.findOne({name: req.params.name})
        console.log(musician);
        const context = {
            musician: musician
        }
        res.render('musicians/show.ejs', context);
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const newArtist = await Musicians.create(req.body);
        mySeedData.push(newArtist);
        console.log(newArtist);
        res.redirect('/')
    } catch(err) {
        console.log(err);
        return next();
    }
})

module.exports = router;