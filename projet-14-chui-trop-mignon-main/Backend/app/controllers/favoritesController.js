// controller de l'entitée favorites

// imports
const { favoritesDataMapper } = require('../dataMappers');
const { animalDataMapper } = require('../dataMappers');
const { CustomError } = require('../services/errorHandling/errors');

const favoritesController = {
    getFavorites: async (req, res) => {

        const user_account_id = Number(req.decodedToken.user.id);
        //* console.log('id of user requesting favorites: ', user_account_id);

        // lance une erreur si l'id n'est pas un nombre
        if(isNaN(user_account_id)) {
            throw new CustomError(400, "id must be a number");
        }

        // getting favorites related to user id
        let userFavorites = await favoritesDataMapper.findUserFavorites(user_account_id);
        //* console.log('ids of favorites of user given id: ', userFavorites);

        // lance une erreur si userFavorites ne trouve rien (n'existe pas)
        if(!userFavorites) {
            throw new CustomError(404, "userFavorites not found");
        }

        // I overload userFavorites to keep animals ids only
        userFavorites = userFavorites.favorites_animal;

        const animalsInfo = [];

        for(let userFavorite of userFavorites) {
            //* console.log('user ID on Favorites controller getAll emthod: ', user_account_id);
            //* console.log("animalID on Favorites controller getAll method : ", animalID);
            const animal = await animalDataMapper.findOne(userFavorite);

            // ne devrait jamais être lancée, lance une erreur si une id d'animal pas dans la DB s'est glissée
            if(!animal) {
                throw new CustomError(404, "animal not found");
            }
            //* console.log('animal found with given id: ', animal);
            animalsInfo.push(animal);
        }
        res.status(200).json(animalsInfo);
    },

    addToFavorites: async (req, res) => {

        const user_account_id = Number(req.decodedToken.user.id);
        const { animal_id } = req.body;

        // controlling ids are correct
        if(isNaN(user_account_id)) {
            throw new CustomError(400, "user id must be a number");
        }

        if(isNaN(animal_id)) {
            throw new CustomError(400, "animal id must be a number");
        }

        // We do not control the existence of the animal in DB because we receive animal id from an animal composant which has been already get from DB.
        // controlling that favorite don't exist already
        const exist = await favoritesDataMapper.findOne(user_account_id, animal_id);

        // playing with truthiness and falsiness of rowCount
        if(exist.rowCount) {
            throw new CustomError(400, "Favorite already exists");
        }
        // error will be thrown from DB as 500 Internal
        const addedFavorite = await favoritesDataMapper.addOneFavorite(user_account_id, animal_id);
        //* console.log('response of adding favorite: ', addedFavorite);

        res.status(201).json("Favoris ajouté");
    },

    deleteFromFavorites: async (req, res) => {

        const user_account_id = Number(req.decodedToken.user.id);
        const { animal_id } = req.body;

        // controlling ids are correct
        if(isNaN(user_account_id)) {
            throw new CustomError(400, "user id must be a number");
        }

        if(isNaN(animal_id)) {
            throw new CustomError(400, "animal id must be a number");
        }

        const deletedFavorite = await favoritesDataMapper.deleteOneFavorite(user_account_id, animal_id);

        // playing with truthiness or falsiness of rowCount
        if(!deletedFavorite.rowCount) {
            throw new CustomError(404, "favorite not found");
        }

        res.status(200).json("Favoris supprimé");
    }
};

module.exports = favoritesController;