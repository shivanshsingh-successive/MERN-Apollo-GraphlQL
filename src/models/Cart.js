const mongoose = require("mongoose");

const Cart = mongoose.model("Cart", {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true }, 
});

module.exports = Cart;