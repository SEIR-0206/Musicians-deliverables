const express =require('express');
const router = express.Router();
const { Snowboarders } = require('../models');

let mySeedData = [ 
    {
    name: "Shaun White",
    image: "https://media.npr.org/assets/img/2022/02/10/gettyimages-1369864828-2144636673e2efe26dd937f6d9a04a582a34b2d4-s1100-c50.jpg"
}, {
    name: "Danny Kass",
    image: "https://www.https://media.gettyimages.com/id/130924350/photo/danny-kass-in-action-during-the-snowboard-superpipe-men-preliminary-final-part-one-at-the-2006.jpg?s=612x612&w=gi&k=20&c=spTCcjQbwrP1hcUMZ87Sn7rDM5QjRUTCskmyrK2yPjs=.com/blog/wp-content/uploads/2014/08/tumblr_n90ek1GlKF1thoekio1_500.jpg"
}, {
    name: "Anna Gasser",
    image: "https://storage.googleapis.com/afs-prod/media/bc72d77908cd4fa5be2523539f11bd5b/3000.jpeg"
}, {
    name: "Terje Håkonsen",
    image: "https://apiwp.thelocal.com/wp-content/uploads/2016/11/6da5e97dd871932f5a6c1cec9ab0a63e508a48e47713360be009db30c33a63b2.jpg"
}
]

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

router.get('/seed', async (req, res, next) => {
    try {
        const deletedOldOnes = await Snowboarders.deleteMany({});
        const addArtists = await Snowboarders.insertMany(mySeedData);
        console.log(addSnowboarder);
        res.redirect('/snowboarders')
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/new', (req, res) => {
    res.render('snowboarders/new.ejs');
});

router.get('/:id', async (req, res, next) => {
    try {
        console.log(req.params)
        const snowboarder = await Snowboarders.findById(req.params.id);
        console.log(snowboarder);
        const context = {
            snowboarder: snowboarder
        }
        res.render('snowboarders/show.ejs', context);
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const newSnowboarder = await Snowboarders.create(req.body);
        mySeedData.push(newSnowboarder)
        console.log(newSnowboarder);
        res.redirect('/')
    } catch(err) {
        console.log(err);
        return next();
    }
})

module.exports = router;