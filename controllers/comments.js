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

        const newComment = await Comments.insertMany({
            header: request.body.name, 
            content: request.body.address, 
            date: request.body.city,  
        })
    }
    catch(error){
        response.status(500).send(error);
    }
});


module.exports = router;
