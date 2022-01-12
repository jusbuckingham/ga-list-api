const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
    header: String,
    content: String,
    date: String
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments; 