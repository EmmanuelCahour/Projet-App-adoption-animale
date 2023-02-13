const handleError = require("../../services/errorHandling/handleError");

// handling controller to limit try/catch blocks inside further methods
const controllerHandler = (controller) => async (req, res) => {
    try {
        //* console.log('je passe dans le controllerHandler');
        await controller(req, res);
    } catch (error) {
        //* console.log('je passe dans le cath error du controller handler');
        //* console.log('res avant handlingError', res);
        return handleError(req, res, error);
    }
};

module.exports = controllerHandler;