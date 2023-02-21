const MongoClient = require("mongodb");
const dotenv = require('dotenv').config();

const uri = `mongodb+srv://${process.env.CONNECTION_USER}:${process.env.CONNECTION_PASSWORD}@greatghost.ox2lw96.mongodb.net/?retryWrites=true&w=majority/`;

const databasename = "cricscorer"; // Database name 
  
MongoClient.connect(url).then((client) => {
  
    const connect = client.db(databasename);
  
    // New Collection
    const collection = connect
        .createCollection("GFGCollection");
  
    console.log("collection created");
}).catch((err) => {
  
    // Handling the error 
    console.log(err.Message);
})