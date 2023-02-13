const { CustomError } = require("../../services/errorHandling/errors");
const handleError = require("../../services/errorHandling/handleError");

const isAdmin = (req, res, next) => {

    const role = req.decodedToken.user.status;
    if(role === 'admin') {
        next();
    } else {
        const error = new CustomError(403, "Forbidden");
        return handleError(req, res, error);
    }

};

module.exports = isAdmin;