//Express and native librares
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

//Import libraries
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//Constant variables
const MONGODB_URL = process.env.MONGODB_URL || process.env.MONGODB_LOCAL;
const PORT = process.env.PORT || 3000;

const mongooseOptions = {
    //useUnifiedTopology: true,
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
    family: 4
};


const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});


mongoose
    .connect(MONGODB_URL,mongooseOptions)
    .then(result => {
        app.listen(PORT,() =>{
            console.log('Listening on port: ' + PORT)
        });
    })
    .catch(err => console.log(err));