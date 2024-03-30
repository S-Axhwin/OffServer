const express = require('express');

const RecRouter = express.Router();

const checkToken = require("../middleware/checkToken")

const{
    RecLogin,
    RecReg,
    RecToken,
    RecNewHost
} = require("../controllers/RecControllers");

RecRouter.post("/login",RecLogin)
RecRouter.post("/token", checkToken, RecToken)
RecRouter.post("/reg", RecReg)
RecRouter.post("/newPost", RecNewHost)

module.exports = RecRouter

