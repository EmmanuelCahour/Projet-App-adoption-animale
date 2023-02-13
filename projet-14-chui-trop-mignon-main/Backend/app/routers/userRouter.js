// routes relatives a l'entitée user

// imports
const { Router } = require('express');
const { userController } = require('../controllers');
const verifyToken = require('../services/jwt/verifiyToken');
const controllerHandler = require('../controllers/utils/controllerHandler');

// user router definition
const userRouter = new Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    required:
 *      - firstname
 *      - lastname
 *      - email
 *      - password
 *      - address
 *      - phone_number
 *      - role_id
 *    properties:
 *      id:
 *        type: integer
 *        description: the auto-generated id of an animal
 *      firstname:
 *        type: string
 *        description: firstname of user
 *      lastname:
 *        type: string
 *        description: lastname of user
 *      email:
 *        type: string
 *        description: email of user
 *      password:
 *        type: string
 *        description: password of user
 *      address:
 *        type: string
 *        description: address of user
 *      phone_number:
 *        type: string
 *        description: phone number of user
 *      role_id:
 *        type: integer
 *        description: id role of a user
 *    example:
 *      id: 1
 *      firstname: valentin
 *      lastname: cahour
 *      email: valentin.cahour@gmail.com
 *      password: valentinCahour1
 *      address: 1 rue de la paix
 *      phone_number: '0876564534'
 *      role_id: 1
 */


/**
 * @swagger
 * /profile:
 *  get:
 *    summary: Retrieve a specific user
 *    tags: [Users]
 *    parameters:
 *      - in: body
 *        name: body
 *        description: User object that needs to be retrieved.
 *        required: true
 *        schema:
 *           $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The retrieved user by his id.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Bad Request.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: ID from token must be a number.
 *      401:
 *        description: Unauthorized.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: Unauthorized.
 *      404:
 *        description: Not found.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: User not found in database.
 */

// road for get profile of user with id from DB
userRouter.get('/api/v1/profile', verifyToken, controllerHandler(userController.getOne));

/**
 * @swagger
 * /profile:
 *  patch:
 *    summary: Update an existing user
 *    tags: [Users]
 *    parameters:
 *      - in: body
 *        name: body
 *        description: User object that needs to be updated.
 *        required: true
 *        schema:
 *           $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The user is succesfully updated.
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *      400:
 *        description: Bad Request.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: ID must be a number or validator error.
 *      401:
 *        description: Unauthorized.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: Unauthorized.
 *      500:
 *        description: Internal Server Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: Internal Server Error.
 */

// road to patch a user in DB
userRouter.patch('/api/v1/profile', verifyToken, controllerHandler(userController.update));

/**
 * @swagger
 * /login:
 *  post:
 *    summary: Log a user
 *    tags: [Users]
 *    parameters:
 *      - in: query
 *        name: email
 *        description: User email
 *        required: true
 *      - in: query
 *        name: password
 *        description: User password
 *        required: true
 *    responses:
 *      200:
 *        description: The user is successfully connected. Return a JWT.
 *      400:
 *        description: Bad Request.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: Provide email or wrong password.
 *      404:
 *        description: Not Found.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: User not found in database.
 *      500:
 *        description: Internal Server Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: Failed to generate token.
 */

// road to generate a JWT for a login asking user
userRouter.post('/api/v1/login', controllerHandler(userController.login));

/**
 * @swagger
 * /register:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Created an user object.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: The user is successfully registered.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Bad Request.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: User already on database.
 *      500:
 *        description: Internal Server Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: Internal Server Error.
 */

userRouter.post('/api/v1/register', controllerHandler(userController.register));


module.exports = userRouter;