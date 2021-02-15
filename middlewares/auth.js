const expressJWT = require("express-jwt")
require('dotenv').config();

exports.requireSignIn = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'auth'
})

exports.isAuth = (req, res, next) => {
    let user = req.auth

    if(!user){
        res.status(403).json({
            error: "Access Denied"
        })
    }
    next()
}
