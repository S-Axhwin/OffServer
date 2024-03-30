const express = require('express');

const UserRouter = express.Router();

const checkToken = require("../middleware/checkToken")

const{
    userLogin,
    userToken,
    userReg,
    AppForJob,
    userListing,
} = require("../controllers/UserControllers");

UserRouter.post("/login",userLogin)
UserRouter.post("/token", checkToken, userToken)
UserRouter.post("/reg", userReg)
UserRouter.post("/bookapp", AppForJob)
UserRouter.get("/listing", userListing)

module.exports = UserRouter

