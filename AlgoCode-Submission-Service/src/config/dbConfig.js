
const mongoose = require('mongoose');
const { MONGODB_URL } = require('./serverConfig');


async function connectToDB(){
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.log("unable to connect to db");
    }
}

module.exports = connectToDB;