const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController.js');

// Rotas da home
route.get('/', homeController.index);


//Rota para o login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);


module.exports = route;
