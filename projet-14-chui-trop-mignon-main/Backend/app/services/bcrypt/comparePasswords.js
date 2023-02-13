const bcrypt = require('bcrypt');
const hashedPassword = require('./hashPassword');

const comparePasswords = async (clientPassword, dbPassword) => {

    // uncomment the next line and relative import to check clear passwords seeded in DB for tests
    // dbPassword = await hashedPassword(dbPassword);

    const check = await bcrypt.compare(clientPassword, dbPassword);

    return check;
};

module.exports = comparePasswords;