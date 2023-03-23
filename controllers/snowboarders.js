const express =require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>This is my list of Snowboarders</h1>`)
})

module.exports = router;