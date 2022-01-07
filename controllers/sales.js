require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Sales } = require('../models')


router.get("/sales", async (request, response) => {

    try {
        const salesArray = await Sales.find({});
        response.json({ salesArray });
    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = router;