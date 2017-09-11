const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err){
        console.log("Not connect to database");  
    }
    else{
        //console.log(config.secret);
        console.log("Connect to database: " + config.db );
    }
});

app.use(express.static(__dirname + '/client/dist/'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3000, () => {
    console.log("Listining on port 3000");
});


