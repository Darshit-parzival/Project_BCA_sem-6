const dbConnection = require('./dbconnect');
const express = require('express');
const cors = require('cors');

dbConnection();

const app = express();
app.use(cors());

app.use(express.json())

app.use('/api/auth', require('./routes/auth'));

app.listen(5000, () => {
    console.log("Server started... http://localhost:5000");
})