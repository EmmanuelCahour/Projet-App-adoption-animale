const { animalDataMapper } = require("../dataMappers");
const { CustomError } = require("../services/errorHandling/errors");

// controller de l'entitée animal
const animalController = {
    // method getAll
    getAll: async (req, res) => {
        const animals = await animalDataMapper.findAll();

        if(!animals) {
            throw new CustomError(404, "Animals not found");
        }

        res.status(200).json(animals);
    },
    // method create
    create: async (req, res) => {

        let animal = req.body;

        //! temporary, need validation with joi there
        if(!animal) {
            throw new CustomError(400, "Wrong incoming body");
        }

        // adding the user id of creator
        animal = {
            ...animal,
            user_account_id: req.decodedToken.user.id
        };

        //* console.log('animal before calling DM on controller', animal);

        const creation = await animalDataMapper.create(animal);

        if(!creation) {
            throw new CustomError(500, "Internal Server Error, couldn't create animal");
        }

        res.status(201).json(creation);

    },
    //method update
    update: async (req, res) => {

        // getting then delete animal Id from body
        const id = Number(req.body.id);

        // deleting ID from request body because it should never change
        delete req.body.id;

        if(isNaN(id)) {
            throw new CustomError(400, "id must be a number");
        }

        const body = req.body;

        //! need to control incoming datas with joi
        if(!body) {
            throw new CustomError(400, "Wrong body incoming");
        }

        // temporary added a date to fill updated_at field
        body.updated_at = new Date();

        // getting animal before update to compare columns
        const animalBeforeUpdate = await animalDataMapper.findOne(id);
        //* console.log('before update: ', animalBeforeUpdate);

        if(!animalBeforeUpdate) {
            throw new CustomError(404, "animal to update not found, please check provided id");
        }

        // controlling presence of all incoming keys in DB by comparing with an animal coming from DB
        for(let[key] of Object.entries(body)) {
            if(!(key in animalBeforeUpdate)) {
                throw new CustomError(400, `Bad Request: column ${key} don't exist in database`);
            }
        }

        for(let[key, value] of Object.entries(body)) {
            // if the key (so the column in DB) is in the animal previously get
            // run the update, if not throw error
            //* console.log('key/value on the loop', key, value);
            await animalDataMapper.updateAnimal(id, key, value);
        }

        const updatedAnimal = await animalDataMapper.findOne(id);

        res.status(200).json(updatedAnimal);
    },
    // method delete
    delete: async (req, res) => {

        const {id} = req.body;

        if(isNaN(id)) {
            throw new CustomError(400, "ID must be a number");
        }

        const deletion = await animalDataMapper.delete(id);

        //* console.log('deletion response', deletion);

        if(deletion.rowCount === 0) {
            throw new CustomError(404, "Requested animal to delete not found on DB");
        }

        res.status(200).json("Animal deleted succesfully");
    }
};

module.exports = animalController;
