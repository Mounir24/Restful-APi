const express = require("express");
const Product = require("../Models/Product");
const router = express.Router();
const product = require("../Models/Product"); // Import Product schema model

// Products route
// Get all items
router.get("/", async(req, res) => {
    try {
        const products = await product.find();
        res.status(200);
        res.json(products);
    } catch (err) {
        res.status(400);
        res.json({ message: err });
    }
});

// Submit an item
router.post("/", async(req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    });

    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.status(400);
        res.json({ message: err });
    }
});

// Get a specific item
router.get("/:itemId", async(req, res) => {
    try {
        const post = await product.findById(req.params.itemId);
        res.status(200);
        res.json(post);
    } catch (err) {
        res.status(400);
        res.json({ message: err });
    }
});

// Remove a specific item
router.delete("/:itemId", async(req, res) => {
    try {
        const removedItem = await product.remove({ _id: req.params.itemId });
        res.status(200);
        res.json(removedItem);
    } catch (err) {
        res.status(400);
        res.json({ message: err });
    }
});

// Update a specific item
router.patch("/:itemId", async(req, res) => {
    try {
        const updatedItem = await product.updateOne({ _id: req.params.itemId }, {
            $set: {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
            },
        });
        res.status(200);
        res.json(updatedItem);
    } catch (err) {
        res.status(400);
        res.json({ message: err });
    }
});

module.exports = router;