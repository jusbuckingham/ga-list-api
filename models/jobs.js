const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    payment: String,
    contact_info: String,
    location: String,
});

const Jobs = mongoose.model("Jobs", JobsSchema);

module.exports = Jobs; 