const { encode } = require('html-entities');

const sanitizeBody = async (req, res, next) => {

    //* console.log('starting sanitize');
    //* console.log('url before sanitize', req.originalUrl);
    //* console.log('body before sanitize', req.body);
    const bodyToSanitize = req.body;

    const charsToEncode = {
        '<': encode('<'),
        '>': encode('>')
    };

    //sanitizing all values of body
    for(let[key, value] of Object.entries(bodyToSanitize)) {

        // replacing each string character by matching encoding
        bodyToSanitize[key] = value.replace(/[<>]/g, match => charsToEncode[match]);

    }
    console.log("body after sanitize", req.body);
    next();
};

module.exports = sanitizeBody;