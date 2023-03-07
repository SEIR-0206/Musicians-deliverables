// Starting off commands
// touch server.js
// npm init -y
// npm i mongoose ejs express dotenv method-override

const express = require('express');
const app = express();
const methodOverride = require('method-override')

const musicians = require('./controllers/musicians')

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(express.urlendcoded({extended:false}));

app.use(methodOverride('_method'));

app.get('/', (req,res) => {
    res.render('home');
})

app.use('/musicians', musicians )

app.get('/*', (req,res) => {
    res.render('404');
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})