const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: { type: String, required: true },
});

const commentsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: { type: String, required: true },
});

const Posts = mongoose.model("Posts", commentsSchema);

module.exports = Posts; 