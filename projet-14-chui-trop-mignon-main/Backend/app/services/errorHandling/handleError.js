// handling errors, don't forget to specify error cases when necessary

const handleError = (req, res, error) => {
    console.log('error in errorHandler', error);

    if(error.httpStatusCode) {
        res.status(error.httpStatusCode).json(error.message);
    } else {
        res.status(500).json("Internal Server Error");
    }

};

module.exports = handleError;