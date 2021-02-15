const express = require('express');
const {createBook} = require('./../controllers/bookController')
const {isAuth, requireSignIn} = require('../middlewares/auth')
const {userById} = require("../middlewares/user")
const router = express.Router()


router.post('/create/:userId', [requireSignIn, isAuth],createBook)

router.param('userId', userById)
module.exports = router