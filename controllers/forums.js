require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Forums } = require('../models')


router.get("/forums", async (request, response) => {

    try {
        const forumsArray = await Forums.find({});
        response.json({ forumsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = router;