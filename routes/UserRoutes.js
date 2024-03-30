const express = require('express');

const UserRouter = express.Router();

const checkToken = require("../middleware/checkToken")

const{
    userLogin,
    userToken,
    userReg,
    userAppointment,
    userListing,
} = require("../controllers/UserControllers");

UserRouter.post("/login",userLogin)
UserRouter.post("/token", checkToken, userToken)
UserRouter.post("/reg", userReg)
UserRouter.get("/bookapp", userAppointment)
UserRouter.get("/listing", userListing)

module.exports = UserRouter

