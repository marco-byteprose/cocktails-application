const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('models/Cocktail');
const Cocktail = mongoose.model('recipes');

// Root Route
router.get('/', (req, res) => {
    res.send("Root API route");
});

// Get all cocktails from db
router.get('/cocktails', async (req, res) => {
    const filter = {};
    const cocktails = await Cocktail.find(filter);
    console.log(cocktails);
    res.status(200).json(cocktails);
});

// Get specific cocktail from db
router.get('/cocktail/:id', async (req, res) => {
    try {
            const cocktailId = new mongoose.Types.ObjectId(req.params.id);
            const filter = { _id: cocktailId };
        
            const cocktail = await Cocktail.find(filter);

            res.status(200).json(cocktail);
    } catch (err) {
        res.send("Cocktail not found.");
    }
});

module.exports = router;