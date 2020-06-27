const express = require('express');
const path = require('path');
const userdata = require('../models/userdata');
const updateData = require('../models/updateData');
const removeData = require('../models/delete');



exports.deleteRecord = (req, res, next) => {
    let Delete = new removeData(req.body.username, req.body.password);
    Delete.RemoveRecord()
    .then(() => {
        console.log('Profile deleted successfully');
        res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    });
};

exports.delete = (req, res, next) => {
   res.sendFile(path.join(__dirname, '../', 'views', 'delete.html'));
};

exports.update = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'update.html'));
};

exports.UpdateDetails = (req, res, next) => {
    let update = new updateData(req.body.firstname, req.body.lastname, req.body.email, req.body.password, req.body.currentUsername);
    update.updateUserDetails()
    .then(() => {
        console.log('profile successfully updated!!!');
        res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    })
    .catch(err => console.log(err));
};

exports.get = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'registeration.html'));
};


exports.log = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
}

exports.post = (req, res, next) => {
    var userDetails = new userdata(req.body.firstname, req.body.lastname, req.body.email, req.body.password);
    userDetails.Insert()
    .then( () => {
       res.sendFile(path.join(__dirname, '../', 'views' , 'login.html'));
    });
};

exports.home = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    userdata.checkDetails(username, password)
    .then(result => {
        if(result){
            //authenticate and move to main page
            res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
        }
        else{   
            //password incorrect -> redirect to login page    
            res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
        }
    });
};

exports.notfound = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', 'notFound.html'));
};