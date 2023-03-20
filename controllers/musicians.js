const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`musicians/index.ejs`)
})

module.exports = router;