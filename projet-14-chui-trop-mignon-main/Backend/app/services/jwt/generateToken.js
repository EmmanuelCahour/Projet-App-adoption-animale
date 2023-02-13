const jwt = require('jsonwebtoken');

// method accept a user took from DB as parameter
// the method returns a JWT token with a payload containing user's infos, the secret, and an expiration time
//! we should find the ENV VAR that define if we are in prod or dev environment, and put custom expires time

const generateToken = async (user) => {
    const token = jwt.sign({user}, process.env.TOKEN_SECRET, {
        expiresIn: "15m"
    });
    return token;
};

module.exports = generateToken;