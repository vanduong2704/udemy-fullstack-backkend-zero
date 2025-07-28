const express = require('express');

const router = express.Router();

// khai bao route
router.get('/', (req, res) => {
    res.send('Hello World! & nodemon')
})
router.get('/vanduong2704', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
})

module.exports = router;//export default chi co 1 bien duy nhat nen no tu mapping 1 bien
