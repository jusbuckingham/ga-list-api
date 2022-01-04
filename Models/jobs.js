const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
    title: String,
    description: { type: String, required: true },
    payment: String,
    contact_info: String,
    location: String,
});

const Jobs = mongoose.model("Jobs", JobsSchema);

module.exports = Jobs; 