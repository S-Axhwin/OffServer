const mongoose = require("mongoose")

const RecSchema = {
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

const RecModel = mongoose.model("Rec", RecSchema)

module.exports = RecModel;