// dataMapper de l'entitée animal

const pool = require('../client');
const {CustomError} = require('../services/errorHandling/errors');

// defaults to setup before send to DB
const defaults = {
    age: "Inconnu",
    color: "Non Communiquée",
    description: "En cours de création"
};

const animalDataMapper = {
    // method to get an animal by his id
    findOne: async (id) => {
        // making query to DB and protecting against injections
        const response = await pool.query(`SELECT * FROM "animal" WHERE id=$1`, [id]);

        if(response.rowCount === 0) {
            throw new CustomError(404, "animal not found");
        }
        return response.rows[0];
    },

    // findAll
    findAll: async () => {
        const response = await pool.query(`SELECT * FROM "animal"`);
        return response.rows;
    },

    // create
    create: async (animal) => {

        // setting default values on desired fields
        for(let [key, value] of Object.entries(animal)) {
            //* console.log('key & value in loop', key, value);
            //* console.log (key, !!value);
            // "!!" allows to convert value as false if falsy (null, undefined, "") operating double negation
            // if a field that can have default value is empty, use default value from JS and not DB (cause request to DB need to send full infos, so throw error if the field isn't present)
            if(Object.keys(defaults).includes(key) && !!value === false ) {
                //* console.log('key & value in loop', key, value);
                animal[key] = defaults[key];
                //*console.log(animal[key]);
            }
        }
        //* console.log('animal after defaults: ', animal);
        // deconstructing values after all "replace by default" operations
        const {name, picture, sex, age, species, color, description, user_account_id} = animal;

        // i save a request to DB on controller using RETURNING
        const response = await pool.query(`
            INSERT INTO "animal" ("name", "picture", "sex", "age", "species", "color", "description", "user_account_id")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING name, picture, sex, age, species, color, description
        `, [name, picture, sex, age, species, color, description, user_account_id]
        );

        return response.rows[0];
    },

    // update
    updateAnimal: async (id, column, value) => {

        //* console.log("params of dataMapper update method", id, column, value);

        const update = await pool.query(
            `UPDATE "animal" SET ${column} = $1 WHERE id=$2 RETURNING *`,
            [value, id]
        );

        //* console.log('update result', update.rows[0]);
        return update.rows[0];
    },
    // delete
    delete: async (id) => {

        const response = await pool.query(`DELETE FROM "animal" WHERE id=$1`, [id]);

        //* console.log('resposne in DM: ', response);

        return response;
    }
};


module.exports = animalDataMapper;