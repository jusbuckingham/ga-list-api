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

router.post("/jobs/new" , async (request, response) => {
    try{

        const newJob = await Jobs.insertMany({
            title: request.body.name, 
            description: request.body.address, 
            post_text: request.body.city, 
            username: request.body.state, 
            likes: request.body.zipCode, 
            comments: request.body.state, 
        })
    }
    catch(error){
        response.status(500).send(error);
    }
});


module.exports = router;
