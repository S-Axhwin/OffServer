const mongoose = require("mongoose")

const JobSchema = {
    title: {
        type: String,
        required: true,
    },
    recGmail: {
        type: String,
        required: true
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