const express = require('express');
const UserController = require('../controllers/UserController');
const MovieController = require('../controllers/MovieController');

const isAdmin = require('../middlewares/isAdmin');
const isauthorized = require('../middlewares/isAuthorized');


const routes = express.Router();




routes.get('/users',isAdmin,UserController.index);
routes.post('/users',isAdmin, UserController.store);
routes.get('/movies', MovieController.index);
routes.post('/movies',isAdmin,MovieController.store);

routes.post('/movies/delete', isAdmin, MovieController.delete)//exclusao logica



module.exports = routes;