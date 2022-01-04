const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    name: String,
    Usersname: { type: String, required: true },
    email: String,
    password: String,
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users; 