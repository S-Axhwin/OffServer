const express = require('express');

const RecRouter = express.Router();

const checkToken = require("../middleware/checkToken")

const{
    RecLogin,
    RecReg,
    RecToken,
    RecNewHost,
    Joblist,
    RecGetbyId
} = require("../controllers/RecControllers");

RecRouter.post("/login",RecLogin)
RecRouter.post("/token", checkToken, RecToken)
RecRouter.post("/reg", RecReg)
RecRouter.post("/newPost", RecNewHost)
RecRouter.post("/getbyid", RecGetbyId)
RecRouter.post("/job", Joblist);

module.exports = RecRouter

