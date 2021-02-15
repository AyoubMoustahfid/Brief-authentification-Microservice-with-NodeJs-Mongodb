const express = require('express');
const {singup, singin, singout} = require('../controllers/authController')
const {requireSignIn} = require("../middlewares/auth")

const router = express.Router()


router.post('/singup', singup);
router.post('/singin', singin);
router.get('/singout', singout)

router.get('/hello',requireSignIn, (req, res) => {
    res.send('Bonjour je suis YouCodeur')
})


module.exports = router