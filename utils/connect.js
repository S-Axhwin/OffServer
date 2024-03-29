const mongoose = require('mongoose');

const URI = "mongodb+srv://ashwinsathiya:qsRwVfzn1sjJeZT6@first.n1as9m8.mongodb.net/sample1?retryWrites=true&w=majority&appName=first"

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