const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
    title: String,
    description: { type: String, required: true },
    price: String,
    contact_info: String,
    location: String,
    image_url: String,
});

const Sales = mongoose.model("Sales", SalesSchema);

module.exports = Sales; 