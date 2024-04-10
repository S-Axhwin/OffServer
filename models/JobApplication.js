const mongoose = require("mongoose")

const JobSchema = {
    gmail: {
        type: String,
        required: true
    },
    recGmail: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
    },
    id: {
        type: String
    }
}

const JobReqModel = mongoose.model("JobApplication", JobSchema)

module.exports = JobReqModel;