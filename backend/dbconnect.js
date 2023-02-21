const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.CONNECTION_USER}:${process.env.CONNECTION_PASSWORD}@greatghost.ox2lw96.mongodb.net/?retryWrites=true&w=majority`;

const dbConnection = () => {
    mongoose.connect(url, { dbName: `cricscorer` }, () => {
        console.log("Connected");
    })
}
module.exports = dbConnection;
