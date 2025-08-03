const express = require('express');
const {getHomepage,getABC,getvanduong2704} = require('../controllers/homeController')
const router = express.Router();

// rrouter.Method('rouute',handler)

router.get('/',getHomepage);

router.get('/abc',getABC);
router.get('/vanduong2704', getvanduong2704);

module.exports = router;//export default chi co 1 bien duy nhat nen no tu mapping 1 bien
