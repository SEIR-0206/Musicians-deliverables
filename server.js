const express = require('express');
const app = express();
const musiciansController = require('./controllers/musicians');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/musicians', musiciansController)

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/*',  (req,res) => {
    res.render('404.ejs');
})

app.listen(4000, () => {
    console.log("Listening on port 4000");
})