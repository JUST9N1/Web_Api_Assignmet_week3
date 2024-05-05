const mongoose = require("mongoose");

const newuserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("new_users", newuserSchema);

module.exports = User;
