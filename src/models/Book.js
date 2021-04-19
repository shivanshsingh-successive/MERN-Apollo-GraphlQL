const mongoose = require("mongoose");

const Book = mongoose.model("Book", { 
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    pages: { type: Number, required: true },
    publisher: { type: String, required: true },
    published_year: { type: Number, required: true },
});

module.exports = Book;