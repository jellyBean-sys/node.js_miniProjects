const express = require('express');
const route = express.Router();
const Register = require('../controllers/registeration');

route.post('/deleteRecord', Register.deleteRecord);
route.get('/remove', Register.delete);
route.get('/Registeration', Register.get);
route.post('/RegisterationPost', Register.post);
route.use('/login', Register.log);
route.post('/home', Register.home);
route.get('/update', Register.update);
route.post('/updateDetails', Register.UpdateDetails);
route.use('/', Register.notfound);

module.exports = route;