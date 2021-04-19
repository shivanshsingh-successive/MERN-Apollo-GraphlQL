const mongoose = require("mongoose");

const Cartee = mongoose.model("Cartee", {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true }, 
});

module.exports = Cartee;