// point d'entrée des controllers

const userController = require('./userController');
const animalController = require('./animalController');
const favoritesController = require('./favoritesController');

module.exports = {
    userController,
    animalController,
    favoritesController
};