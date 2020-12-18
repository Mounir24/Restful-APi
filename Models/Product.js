const mongoose = require("mongoose");

// Products Schema

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("products", productSchema);