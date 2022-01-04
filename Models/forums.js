const mongoose = require("mongoose");

const ForumsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    post_text: { type: String, required: true },
    username: { type: String, required: true },
});

const Forums = mongoose.model("Forums", ForumsSchema);

module.exports = Forums; 