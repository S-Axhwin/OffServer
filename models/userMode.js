const mongoose = require("mongoose")

const UserSchema = {
    gmail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    appointments: {
        type: Array,
    },
}

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel;