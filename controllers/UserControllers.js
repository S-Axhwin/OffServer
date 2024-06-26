const UserDB = require("../models/userMode")
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const JobReq = require("../models/JobReq")
const JobApp = require("../models/JobApplication")

const userLogin = async ( req, res ) => {
    const { gmail, password } = req.body
    //console.log(gmail, password);
    if(!(gmail && password)) return res.status(400).json({reason: 'missing values'});
    const isExist = await UserDB.findOne({gmail});
    //console.log(isExist);
    if(isExist){
        const checkpass = await bcryptjs.compare(password, isExist.password)
        if(checkpass == true){
            const token = await jwt.sign({gmail: isExist.gmail}, 'pannada', {expiresIn: '5m'})
            res.status(200).json({status: true, reason: 'loggedin', token, gmail:isExist.gmail});
        } else {
            res.status(400).json({status: false, reason: 'password incorrect'});
        }   
    } else {
        res.status(404).json({status: false, reason: "user not found"})
    }
}

const userToken =  ( req, res ) => {
    res.json({gmail: req.gmail})
}

const userListing = async (req, res) => {
    const data = await JobReq.find();
    console.log(data);
    res.json({list:data})
}

const userReg =  async( req, res ) => {
    const { gmail, password,  phone } = req.body;
    if(!(gmail && password && phone)) return res.status(400).json({reason: 'missing values'});
    const createUser = async({gmail, password, phone}) => {
        const hashpass = await bcryptjs.hash(password, 9);
        const resp = UserDB.create({gmail, password: hashpass, phone})
        .then((data) => {
            return data;
        })
        .catch(e => {
            return false
        })
        return resp
    } 
    const respon = await createUser({gmail, password, phone});
    if(respon) return res.status(200).json({status: true, reason: 'all ok user created'})
    return res.status(400).json({state: false, reason: 'may be user already exist'});
}

const AppForJob = (req, res) => {
    const { id, gmail, experience, skills, recGmail } = req.body;
    console.log(id, gmail, experience, skills, recGmail);
    JobApp.create({id, gmail, experience, skills, recGmail })
    .then(() => {
        return res.json({status: true, reason: 'created applicatioin'})
    })
    .catch((e) => res.status(400).json({status: 'reached endpoint'}))
}
const userAppointment =  ( req, res ) => {
    res.json({"@": 'userAppointment'})
}






module.exports = {
    userLogin,
    userToken,
    userReg,
    AppForJob,
    userListing
}