const Joi = require('joi');

const userRegisterSchema = Joi.object({
    firstname: Joi.string()
    // Accepting only uppercases and lowercases, no other characters with a maximum of 20 characters.
        .max(20)
        .pattern(/^[a-zA-Z]+$/),
    lastname: Joi.string()
        .max(20)
        .pattern(/^[a-zA-Z]+$/),
    // Regex found at https://gist.github.com/Robert-Schwartz/8ddac9ad8be545a8997433faed18dfaf with a few modifications
    email: Joi.string()
        // works only with new Regexp ?
        .pattern(new RegExp(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/)),
    password: Joi.string()
    // At least 8 characters, at most 30 characters, accepting uppercases, lowercases, digits, and special characters.
        .pattern(/^[a-zA-Z0-9#?!@$%^&*-]{8,30}$/),
    address: Joi.string(),
    phone_number: Joi.string()
}).required();

module.exports = userRegisterSchema;