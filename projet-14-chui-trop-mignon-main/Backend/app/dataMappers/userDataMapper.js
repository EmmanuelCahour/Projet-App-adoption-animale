// dataMapper de l'entitée user
const pool = require('../client');
const {CustomError} = require('../services/errorHandling/errors');

const userDataMapper = {
    findOne: async (id) => {
        //* console.log('je passe dans la méthode findOne du dataMapper');
        // making query to DB and protecting against injections
        const response = await pool.query(`SELECT * FROM "user_account" WHERE id=$1`, [id]);
        //* console.log('contenu de la réponse du userDataMapper.findOne', response);

        if(response.rowCount === 0) {
            throw new CustomError(404, "user not found");
        }
        return response.rows[0];
    },

    findByEmail: async (email) => {

        const response = await pool.query(
            `SELECT user_account.id, firstname, lastname, password, status 
                FROM "user_account" JOIN "role" ON role.id = user_account.role_id WHERE user_account.email=$1`, [email]);

        return response.rows[0];
    },

    createUser: async (user) => {

        const { firstname, lastname, email, password, address, phone_number } = user;

        const response = await pool.query(
            `INSERT INTO "user_account"("firstname", "lastname", "email", "password", "address", "phone_number")
                VALUES($1,$2,$3,$4,$5,$6) RETURNING firstname, lastname, email, address, phone_number`, [firstname,lastname,email,password,address,phone_number]);
        //* console.log('response on DM: ', response);
        return response;
    },

    updateUser: async (id, column, value) => {

        //* console.log("params of dataMapper update method", id, column, value);

        const update = await pool.query(
            `UPDATE "user_account" SET ${column} = $1 WHERE id=$2`,
            [value, id]
        );

        //* console.log('update result', update);
        return update;
    }

};
module.exports = userDataMapper;
