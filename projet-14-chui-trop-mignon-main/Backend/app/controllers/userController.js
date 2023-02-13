// controller de l'entitée user

// imports

const { userDataMapper } = require('../dataMappers');
const generateToken = require('../services/jwt/generateToken');
const { CustomError } = require('../services/errorHandling/errors');
const hashPassword = require('../services/bcrypt/hashPassword');
const comparePasswords = require('../services/bcrypt/comparePasswords');
const { userRegisterValidation } = require('../services/validation/validator');
const { userRegisterSchema } = require('../services/validation/schemas');
const { userUpdateValidation } = require('../services/validation/validator');
const { userUpdateSchema } = require('../services/validation/schemas');


const userController = {
    getOne: async (req, res) => {
        //* console.log('je passe dans la méthode du controller getOne');
        const id = Number(req.decodedToken.user.id);

        if(isNaN(id)) {
            throw new CustomError(400, "Bad Request: id must be a number");
        }

        const user = await userDataMapper.findOne(id);

        if(!user) {
            throw new CustomError(404, "User not found please check provided id");
        }

        // quick delete of useless props
        delete user.id;
        delete user.password;
        delete user.role_id;
        delete user.created_at;
        delete user.updated_at;

        res.status(200).json(user);

    },

    login: async (req, res) => {
        // we need to get the body
        const {email, password } = req.body;

        // controlling presence of email and password
        if(!email || email === "") {
            throw new CustomError(400, "Please provide email");
        }

        if(!password || password === "") {
            throw new CustomError(400, "Please provide password");
        }

        // we need with mail in body to find a user in DB

        const user = await userDataMapper.findByEmail(email);
        //* console.log('user in login method: ', user);
        // if there isn't user, return 404
        if(!user) {
            throw new CustomError(404, "User not found, please check provided email");
        }
        // if user, compare passwords
        const compare = await comparePasswords(password, user.password);

        // if password not OK, return 400
        if(!compare) {
            throw new CustomError(400, "Wrong password");
        }

        // deleting user password to not put it on JWT
        delete user.password;
        // JWT generation

        //* console.log('secret just before token generation', secret);
        const token = await generateToken(user);
        //* console.log('i\'m in userController after token generation', token);

        // if not token return error 500
        if(!token) {
            throw new CustomError(500, "Failed to generate a token");
        }

        const response = {
            token
        };

        // if all ok, return the token
        res.status(200).json(response);
    },

    register: async (req, res) => {

        //We get the body

        //const { firstname, lastname, email, password, address, phone_number, role_id } = req.body;
        const user = req.body;
        //* console.log('body incoming in register', req.body);

        // I verify that the registerSchema correponds to what the user entered to register himself.

        const validation = await userRegisterValidation.body(userRegisterSchema, user);
        //* console.log('validation in register method: ', validation);

        // If the schema does not correspond to what the user entered, we throw an error.

        if(validation.error) {
            throw new CustomError(400, `Schema invalid: ${validation.error}`);
        }

        //We verify that the user is not already in DB by checking email presence

        const userExist = await userDataMapper.findByEmail(user.email);

        // If the user exists, we throw an error

        if(userExist) {
            throw new CustomError(400, "User already exists.");
        }

        // Hashing password
        const hashedPassword = await hashPassword(user.password);

        //* console.log('entre le hash du password et le remplacement dans user', user.password);
        // Changing password of body by hashed one
        user.password = hashedPassword;

        // If the user does not exist, we create a user
        const result = await userDataMapper.createUser(user);

        // We return the new user (using RETURNING on sql request)
        //* console.log('result of request to DB in register', result);
        res.status(201).json(result.rows[0]);
    },

    // method to update a user in DB
    update: async (req, res) => {

        const userId = Number(req.decodedToken.user.id);

        if(isNaN(userId)) {
            throw new CustomError(400, "id must be a number");
        }

        // deleting ID from request body because it should never change
        delete req.body.id;

        //* console.log("id in controller update method", userId);

        const body = req.body;
        //* console.log('body on update request', body);

        // deleting if there is empty key/values front
        for(let[key, value] of Object.entries(body)) {
            //* console.log('not value', !value);
            if(!value) {
                delete body[key];
            }
        }

        //* console.log('body in update request after cleaning empty values', body);

        // I verify that the registerSchema correponds to what the user entered to register himself.
        const validation = await userUpdateValidation.body(userUpdateSchema, req.body);
        //* console.log('details from validation in controller: ', validation.details);

        // If the schema does not correspond to what the user entered, we throw an error.
        if(validation.error) {
            throw new CustomError(400, `Schema invalid: ${validation.error}`);
        }

        // temporary added a date to fill updated_at field, it could be better to do that in database
        body.updated_at = new Date();
        //* console.log("body in controller update method", body);

        /* NOW MADE BY VALIDATION
        const userBeforeUpdate = await userDataMapper.findOne(userId);

        // control that each incoming fields are columns of DB
        for(let[key] of Object.entries(body)) {
            if(!(key in userBeforeUpdate)) {
                throw new CustomError(400, `Bad Request: column ${key} don't exist in database`);
            }
        }
        */

        // hashing the incoming password
        if(body.password) {
            body.password = await hashPassword(body.password);
        }

        //* console.log('hashed password on update controller method: ', body.password);
        // looping on key/value pairs to update each fields we received
        for(let[key, value] of Object.entries(body)) {
            //* console.log('key/value on the loop', key, value);
            // error will be thrown by DB
            await userDataMapper.updateUser(userId, key, value);
        }

        // getting the new updated user
        const updatedUser = await userDataMapper.findOne(userId);

        // quick reformating user to send back after
        delete updatedUser.id;
        delete updatedUser.password;
        delete updatedUser.role_id;
        delete updatedUser.created_at;
        delete updatedUser.updated_at;
        // returning the freshly updated user to permit front update instantly infos
        res.status(200).json(updatedUser);
    },
};

module.exports = userController;
