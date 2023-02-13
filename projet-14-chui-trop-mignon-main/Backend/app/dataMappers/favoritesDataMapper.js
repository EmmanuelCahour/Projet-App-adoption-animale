// dataMapper de l'entitée favorites
const pool = require('../client');
//const {CustomError} = require('../services/errorHandling/errors');

const favoritesDataMapper = {
    findUserFavorites: async (user_account_id) => {

        const response = await pool.query(
            `SELECT add_favorite.user_account_id, ARRAY_AGG(animal_id) AS favorites_animal 
                FROM add_favorite 
                WHERE add_favorite.user_account_id = $1
                GROUP BY add_favorite.user_account_id`, [user_account_id]);
        //* console.log("find userFavorite : ", response.rows[0].favorites_animal);
        return response.rows[0];
    },

    findOne: async (user_account_id, animal_id) => {
        const response = await pool.query(
            `SELECT * FROM add_favorite WHERE user_account_id=$1 AND animal_id=$2`,
            [user_account_id, animal_id]
        );
        //* console.log('response in DM findOne method: ', response);
        return response;
    },

    addOneFavorite: async (user_account_id, animal_id) => {

        const response = await pool.query(
            `INSERT INTO "add_favorite"("user_account_id", "animal_id")
                VALUES($1, $2)`, [user_account_id, animal_id]);
        return response;

    },

    deleteOneFavorite: async (user_account_id, animal_id) => {
        //* console.log('ids incoming in delete DM request: ', user_account_id, animal_id);
        const response = await pool.query(
            `DELETE FROM "add_favorite" WHERE user_account_id = $1 AND animal_id = $2`, [user_account_id, animal_id]);
        //* console.log('response of delete DM request: ', response);
        return response;
    },
};

module.exports = favoritesDataMapper;