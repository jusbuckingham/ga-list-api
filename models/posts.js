const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: { type: String, required: true },
});

const postsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: [commentsSchema],
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts; 