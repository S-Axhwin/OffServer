const RecDB = require("../models/RecMode");
const JobReqModel = require("../models/JobReq")
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Japp = require("../models/JobApplication")

const RecLogin = async ( req, res ) => {
    const { gmail, password } = req.body
    //console.log(gmail, password);
    if(!(gmail && password)) return res.status(400).json({reason: 'missing values'});
    const isExist = await RecDB.findOne({gmail});
    //console.log(isExist);
    if(isExist){
        const checkpass = await bcryptjs.compare(password, isExist.password)
        if(checkpass == true){
            const token = await jwt.sign({gmail: isExist.gmail}, 'pannada', {expiresIn: '5m'})
            res.status(200).json({status: true, reason: 'loggedin', token, gmail:isExist.gmail, isRec: true});
        } else {
            res.status(400).json({status: false, reason: 'password incorrect'});
        }   
    } else {
        res.status(404).json({status: false, reason: "Rec not found"})
    }
}

const RecToken =  ( req, res ) => {
    res.json({gmail: req.gmail})
}

const RecReg =  async( req, res ) => {
    const { gmail, password,  phone } = req.body;
    if(!(gmail && password && phone)) return res.status(400).json({reason: 'missing values'});
    const createRec = async({gmail, password, phone}) => {
        const hashpass = await bcryptjs.hash(password, 9);
        const resp = RecDB.create({gmail, password: hashpass, phone})
        .then((data) => {
            return data;
        })
        .catch(e => {
            return false
        })
        return resp
    } 
    const respon = await createRec({gmail, password, phone});
    if(respon) return res.status(200).json({status: true, reason: 'all ok Rec created'})
    return res.status(400).json({state: false, reason: 'may be Rec already exist'});
}



const RecAppointment =  ( req, res ) => {
    res.json({"@": 'RecAppointment'})
}

const RecNewHost = async(req, res) => {
    const { title, skills, experience, salary, recGmail } = req.body;
    console.log(title, skills, experience, salary, recGmail);
    if(!(title && experience && salary))  return res.status(400).json({status: false, reason: 'missing feilds'});
    const resp = JobReqModel.create({title, skills, experience, salary, id: Date.now(), recGmail: recGmail})
    .then(r => {
        return true
    })
    .catch(() => {
        return false
    })

    if(res){
        return res.status(200).json({status: true, reason: "created"})
    } else {
        return res.state(400).json({status: false, reason: "may be same job listed already"})
    }
    
}

const Joblist = async (req, res) => {
    const recGmail = req.recGmail;
    const data = await Japp.find({recGmail});
    return res.json({data})
}


const RecGetbyId = async (req, res) => {
    const recGmail = req.recGmail;
    const data = await Japp.find({recGmail})
    .then((res) => {
        return res.json({id: res.id})
    })
    return res.json({status: false})
}

module.exports = {
    RecLogin,
    RecToken,
    RecReg,
    RecAppointment,
    RecNewHost,
    Joblist,
    RecGetbyId
}