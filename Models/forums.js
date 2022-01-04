const mongoose = require("mongoose");

const ForumsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    post_text: String,
    username: { type: String, required: true },
});

const Forums = mongoose.model("Forums", ForumsSchema);

module.exports = Forums; 