const mongoose = require("mongoose")

const JobSchema = {
    title: {
        type: String,
        required: true,
    },
    RecGmail: {
        type: String
    },
    experience: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        require: true,
    },
    skills: {
        type: Array,
    },
    id: {
        type: String
    }
}

const JobReqModel = mongoose.model("JobRequirement", JobSchema)

module.exports = JobReqModel;