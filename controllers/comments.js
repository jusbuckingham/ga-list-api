require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Comments } = require('../models')


router.get("/", async (request, response) => {

    console.log(request.body)
    response.send('ok');

    try {
        const commentsArray = await Comments.find({});
        response.json({ commentsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/new", async (request, response) => {
    try {

        response.send('ok')
        console.log(request.body)

        const newComment = await Comments.insertMany({
            header: request.body.header,
            content: request.body.content,
            date: request.body.date,
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;
