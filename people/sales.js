const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    price: String,
    contact_info: String,
    location: String,
    image_url: String,
});

const Sales = mongoose.model("Sales", SalesSchema);

module.exports = Sales; 