//const Joi = require('joi');
//const { userRegisterSchema, userUpdateSchema } = require('./schemas/index');

const userRegisterValidation = {
    body: async (userRegisterSchema, user) => {
        const schema = userRegisterSchema.validate(user);
        //* console.log('schema in userRegisterValidation method: ', schema);
        return schema;
    }
};

const userUpdateValidation = {
    body: async (userUpdateSchema, user) => {
        const schema = userUpdateSchema.validate(user);
        return schema;
    }
};

module.exports = {
    userRegisterValidation,
    userUpdateValidation
};