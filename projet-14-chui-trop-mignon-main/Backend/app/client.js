// open connections to DB
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({

    // uncomment this an comment host, user, database, password when u need to deploy
    // connectionString: process.env.DATABASE_URL,

    // on dev environment
    host: 'localhost',
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: `${process.env.PGPASSWORD}`,
    max: 20,
    idleTimeoutMillis: 15000, //number of milliseconds that a client have to wait being unused to close
    ssl: {
        rejectUnauthorized: false
    }

});

(async function () {
    await pool.connect();
})();

module.exports = pool;