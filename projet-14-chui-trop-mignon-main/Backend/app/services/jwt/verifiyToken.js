const jwt = require('jsonwebtoken');
const { CustomError } = require('../errorHandling/errors');
const handleError = require('../errorHandling/handleError');

const verifyToken = async (req, res, next) => {

    // controlling if token is there
    if(!req.headers.authorization) {
        const newError = new CustomError(401, "No token provided");
        return handleError(req, res, newError);
    }

    try {
        //* console.log('req headers entering verifyToken', req.headers);
        // slicing first 7 caracters to keep only token (removing "Bearer ")
        const token = req.headers.authorization.slice(7);

        //* console.log('i\'m taken from headers.authorization in verifyToken', token);
        // check of token
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

        //* console.log('i\'m checked from jwt.verify from verifyToken', decodedToken);
        // passing decoded token in request for ulterior use
        req.decodedToken = decodedToken;
        next();
    } catch (error) {

        //* console.log('raised from verifyToken', error);
        const newError = new CustomError(401, error.message);
        return handleError(req, res, newError);
    }

};

module.exports = verifyToken;
