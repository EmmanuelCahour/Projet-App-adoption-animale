// routes relatives a l'entitée animal
const { Router } = require('express');
const animalController = require('../controllers/animalController');
const verifyToken = require('../services/jwt/verifiyToken');
const controllerHandler = require('../controllers/utils/controllerHandler');
const isAdmin = require('../controllers/utils/isAdmin');

const animalRouter = new Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   Animal:
 *    type: object
 *    required:
 *      - name
 *      - picture
 *      - sex
 *      - species
 *      - description
 *    properties:
 *      id:
 *        type: integer
 *        description: the auto-generated id of an animal
 *      name:
 *        type: string
 *        description: name of animal
 *      picture:
 *        type: string
 *        description: picture of animal
 *      sex:
 *        type: string
 *        description: sex of animal
 *      age:
 *        type: string
 *        description: age of animal
 *      species:
 *        type: string
 *        description: species of animal
 *      color:
 *        type: string
 *        description: color of animal
 *      description:
 *        type: string
 *        description: description of animal
 *    example:
 *      id: 1
 *      name: RogerRabbit
 *      picture: /public/img/rogerrabbit.jpg
 *      sex: male
 *      age: '2'
 *      species: rabbit
 *      color: white
 *      description: a rabbit with a sense of humour
 */

/**
 * @swagger
 * /animals:
 *  get:
 *    summary: Retrieve a list of animals
 *    tags: [Animals]
 *    responses:
 *      200:
 *        description: The list of animals.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/Animal'
 *      404:
 *        description: Not Found.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  error:
 *                    example: Animals not found.
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

// GET getAll
animalRouter.get('/api/v1/animals', controllerHandler(animalController.getAll));

/**
 * @swagger
 * /animals:
 *  post:
 *    summary: Add a new animal
 *    description: only access by admin.
 *    tags: [Animals]
 *    parameters:
 *      - in: body
 *        name: body
 *        description: Animal object that needs to be added.
 *        required: true
 *        schema:
 *           $ref: '#/components/schemas/Animal'
 *    responses:
 *      201:
 *        description: The adding animal.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Animal'
 *      400:
 *        description: Bad Request.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  error:
 *                    example: Wrong incoming body.
 *      401:
 *        description: Unauthorized.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  error:
 *                    example: Unauthorized.
 *      403:
 *        description: Forbidden.
 *        content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *                  error:
 *                    example: Forbidden.
 *      500:
 *        description: Internal Server Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  error:
 *                    example: Internal Server Error, could not create animal.
 */

// POST createAnimal
animalRouter.post('/api/v1/animals', verifyToken, isAdmin, controllerHandler(animalController.create));

/**
 * @swagger
 * /animals:
 *  patch:
 *    summary: Update an existing animal
 *    description: only access by admin.
 *    tags: [Animals]
 *    parameters:
 *      - in: body
 *        name: body
 *        required: true
 *        schema:
 *            $ref: '#/components/schemas/Animal'
 *    responses:
 *      200:
 *        description: The animal is succesfully updated.
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/Animal'
 *      400:
 *        description: Bad Request.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: ID must be a number, Wrong body incoming, or Column ... does not exist on database.
 *      401:
 *        description: Unauthorized.
 *        content:
 *           application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                     error:
 *                       example: Unauthorized.
 *      403:
 *        description: Forbidden.
 *        content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *                  error:
 *                    example: Forbidden.
 *      404:
 *        description: Not Found.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: Animal to update not found.
 *      500:
 *        description: Internal Server Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                      example: Internal Server Error.
 */

// PATCH updateAnimal
animalRouter.patch('/api/v1/animals', verifyToken, isAdmin, controllerHandler(animalController.update));

/**
 * @swagger
 *  /animals:
 *    delete:
 *      summary: Delete an animal
 *      description: only access by admin.
 *      tags: [Animals]
 *      parameters:
 *      - in: body
 *        name: body
 *        description: Animal object that needs to be deleted.
 *        required: true
 *        schema:
 *           $ref: '#/components/schemas/Animal'
 *      responses:
 *        200:
 *          description: The animal is successfully deleted.
 *          content:
 *            application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                        example: Animal deleted.
 *        400:
 *          description: Bad Request.
 *          content:
 *            application/json:
 *                schema:
 *                 type: object
 *                 properties:
 *                     error:
 *                       example: ID must be a number.
 *        403:
 *          description: Forbidden.
 *          content:
 *            application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                        example: Forbidden.
 *        404:
 *          description: Not Found.
 *          content:
 *            application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                     error:
 *                       example: Requested animal to delete not found on database.
 *        500:
 *          description: Internal Server Error.
 *          content:
 *            application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                        example: Internal Server Error.
 */

// DELETE deleteAnimal
animalRouter.delete('/api/v1/animals', verifyToken, isAdmin, controllerHandler(animalController.delete));

module.exports = animalRouter;
