const express = require('express');
const {getCreatePage,getUpdatePage,getHomepage
    ,getABC,getvanduong2704,postCreateUser,postUpdateUser ,
    postDeleteUser,postHandleRemoveUser
} = require('../controllers/homeController')
const router = express.Router();

// rrouter.Method('rouute',handler)

router.get('/',getHomepage);



router.get('/abc',getABC);
router.get('/vanduong2704', getvanduong2704);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);
router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);

module.exports = router;//export default chi co 1 bien duy nhat nen no tu mapping 1 bien

