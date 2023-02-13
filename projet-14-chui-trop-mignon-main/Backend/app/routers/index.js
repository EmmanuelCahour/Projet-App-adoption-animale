// point d'entrée pour les routers

// imports
const { Router } = require('express');
const animalRouter = require('./animalRouter');
const userRouter = require('./userRouter');
const favoritesRouter = require('./favoritesRouter');
const { CustomError } = require('../services/errorHandling/errors');
const handleError = require('../services/errorHandling/handleError');
const sanitize = require('../services/sanitize/sanitizeXss');

// mainRouter definition
const mainRouter = new Router();

const handle404onRoad = (req, res) => {
    //* console.log('404 handled');
    const newError = new CustomError(404, "Road not found");
    return handleError(req, res, newError);
};

mainRouter.use(sanitize);

// sub-router using
mainRouter.use(userRouter);
mainRouter.use(animalRouter);
mainRouter.use(favoritesRouter);

mainRouter.use((req, res) => {
    return handle404onRoad(req, res);
});

module.exports = mainRouter;