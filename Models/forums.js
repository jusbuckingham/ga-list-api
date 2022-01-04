const mongoose = require("mongoose");

const ForumsSchema = new mongoose.Schema({
    title: String,
    description: { type: String, required: true },
    post_text: String,
    username: String,
});

const Forums = mongoose.model("Forums", ForumsSchema);

module.exports = Forums; 