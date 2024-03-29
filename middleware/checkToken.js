const jwt = require("jsonwebtoken")

const checkToken = async (req, res, next) => {
    const curToken = req.body.token;
    if(!curToken) return res.status(400).json({status: false, reason: "no token found"});
    try {
        const isExist = await jwt.verify(curToken, "pannada");
        req.gmail = isExist.gmail;
        next()
    } catch(e) {
        //console.log(e);
        res.status(400).json({status: false, reason: 'token experied'})
    }
}

module.exports = checkToken;