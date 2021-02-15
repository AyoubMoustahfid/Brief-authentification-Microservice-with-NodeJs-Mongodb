const Book = require('../models/bookModel')


exports.createBook = (req, res) => {
    const book = new Book(req.body)

    book.save((err, book) => {
        if(err) {
            return res.status(400).json({
                error: "bad Request !"
            })
        }

        res.json({
            book: book
        })
    })
}

