const express = require('express');
const myApp = express();
const Intermediate = require('./routes/Intermediate');
const bodyParser = require('body-parser');


myApp.use(bodyParser.urlencoded({extended:true}));
myApp.use(Intermediate);

myApp.listen(7000);