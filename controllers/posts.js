require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Posts } = require('../models')


router.get("/posts", async (request, response) => {

    try {
        const postsArray = await Posts.find({});
        response.json({ postsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/posts/new" , async (request, response) => {
    try{

        const newPost = await Posts.insertMany({
            title: request.body.title, 
            body: request.body.body, 
            comments: request.body.comments,  
        })
    }
    catch(error){
        response.status(500).send(error);
    }
});


module.exports = router;
