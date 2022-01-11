require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Sales } = require('../models')


router.get("/", async (request, response) => {

    try {
        const salesArray = await Sales.find({});
        response.json({ salesArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/new" , async (request, response) => {
    try{

        const newSale = await Sales.insertMany({
            title: request.body.title, 
            description: request.body.description, 
            post_text: request.body.post_text, 
            username: request.body.username, 
            likes: request.body.likes, 
            comments: request.body.comments, 
        })
    }
    catch(error){
        response.status(500).send(error);
    }
});

module.exports = router;