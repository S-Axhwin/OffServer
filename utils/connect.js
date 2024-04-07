const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI

const connect = async() => {
    const res = mongoose.connect(URI)
    .then(res => {
        console.log('connected to db');
    })
    .catch(e => {
        console.log("error while connecting to db");
        console.log(e);
        process.exit(0);
    })
    return res
}

module.exports = {
    connect,
}
