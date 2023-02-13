// routes relatives a l'entitée favorites

// imports
const { Router } = require('express');
const { favoritesController } = require('../controllers');
const verifyToken = require('../services/jwt/verifiyToken');
const controllerHandler = require('../controllers/utils/controllerHandler');

// user router definition
const favoritesRouter = new Router();

/**
 * @swagger
 * /favorites:
 *  get:
 *    summary: Retrieve user favorites
 *    tags: [Favorites]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of favorite that needs to be fetched.
 *        required: true
 *    responses:
 *      200:
 *        description: List of user favorites.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Animal'
 *      400:
 *        description: Bad Request.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: ID must be a number.
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
 *        description: Not Found.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   error:
 *                     example: User favorites not found or animal not found.
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

favoritesRouter.get('/api/v1/favorites', verifyToken, controllerHandler(favoritesController.getFavorites));

/**
  * @swagger
  * /favorites:
  *  post:
  *    summary: Add a favorite
  *    tags: [Favorites]
  *    parameters:
  *      - in: body
  *        name: body
  *        description:
  *        required: true
  *        schema:
  *          type: object
  *          properties:
  *              animal_id:
  *                 type: integer
  *                 example: 10
  *    responses:
  *       201:
  *        description: The favorite is successfully added.
  *        content:
  *           application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                     error:
  *                       example: Favorite added.
  *       400:
  *        description: Bad Request.
  *        content:
  *           application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                     error:
  *                       example: User id must be a number, animal id must be a number or favorite already exists.
  *       401:
  *        description: Unauthorized.
  *        content:
  *           application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                     error:
  *                       example: Unauthorized.
  *       500:
  *        description: Internal Server Error.
  *        content:
  *           application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                     error:
  *                       example: Internal Server Error.
  */

favoritesRouter.post('/api/v1/favorites', verifyToken, controllerHandler(favoritesController.addToFavorites));

/**
  * @swagger
  * /favorites:
  *  delete:
  *    summary: Delete a favorite
  *    tags: [Favorites]
  *    parameters:
 *      - in: body
 *        name: body
 *        description: User object that needs to be deleted.
 *        required: true
 *        schema:
 *           $ref: '#/components/schemas/User'
  *    responses:
  *         200:
  *           description: The favorite is successfully deleted.
  *           content:
  *             application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                     error:
  *                       example: Favorite deleted.
  *         400:
  *           description: Bad Request.
  *           content:
  *             application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                     error:
  *                       example: User ID must be a number or animal ID must be a number.
  *         401:
  *           description: Unauthorized.
  *           content:
  *             application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                     error:
  *                       example: Unauthorized.
  *         404:
  *            description: Not Found.
  *            content:
  *              application/json:
  *                schema:
  *                  type: object
  *                  properties:
  *                      error:
  *                        example: Favorite not found.
  *         500:
  *            description: Internal Server Error.
  *            content:
  *              application/json:
  *                schema:
  *                  type: object
  *                  properties:
  *                      error:
  *                        example: Internal Server Error.
  */

favoritesRouter.delete('/api/v1/favorites', verifyToken, controllerHandler(favoritesController.deleteFromFavorites));


module.exports = favoritesRouter;