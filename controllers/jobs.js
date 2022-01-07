require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Jobs } = require('../models')


router.get("/jobs", async (request, response) => {

    try {
        const jobsArray = await Jobs.find({});
        response.json({ jobsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;