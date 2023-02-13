// main Custom Error
class CustomError extends Error {
    constructor(httpStatusCode, message) {
        super(message),
        this.httpStatusCode = httpStatusCode;
    }
}

module.exports = {
    CustomError
};