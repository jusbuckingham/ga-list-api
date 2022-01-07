require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Comments } = require('../models')


router.get("/comments", async (request, response) => {

    try {
        const commentsArray = await Comments.find({});
        response.json({ commentsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/comments/new" , async (request, response) => {
    try{

        const newJob = await Comments.insertMany({
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
