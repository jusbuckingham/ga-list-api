require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Posts } = require('../models')


router.get("/", async (request, response) => {
    // Kyle & Avery's Changes
    console.log(request.body)
    response.send('ok');

    try {
        const postsArray = await Posts.find({});
        response.json({ postsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/new", async (request, response) => {
    try {
        // Kyle & Avery's Changes
        response.send('ok')
        console.log(request.body)

        const newPost = await Posts.insertMany({
            title: request.body.title,
            body: request.body.body,
            comments: request.body.comments,
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

router.post("/edit", async (request, response) => {
    try {
        // Kyle & Avery's Changes
        response.send('ok')
        console.log(request.body)

        const editPost = await Posts.updateOne({
            title: request.body.title,
            body: request.body.body,
            comments: request.body.comments,
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

router.post("/delete", async (request, response) => {
    try {
        // Kyle & Avery's Changes
        response.send('ok')
        console.log(request.body)

        const deletePost = await Posts.deleteOne({
            title: request.body.title,
            body: request.body.body,
            comments: request.body.comments,
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});


module.exports = router;
