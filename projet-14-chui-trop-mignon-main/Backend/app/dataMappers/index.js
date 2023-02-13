// point d'entrée des dataMappers

// imports
const userDataMapper = require('./userDataMapper');
const animalDataMapper = require('./animalDataMapper');
const favoritesDataMapper = require('./favoritesDataMapper');

module.exports = {
    userDataMapper,
    animalDataMapper,
    favoritesDataMapper
};