const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

    name: {
        type : String,
        trim : true,
        maxLength : 50,
        required : true
    }, 
    author: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps : true})

module.exports = mongoose.model("Book", bookSchema)