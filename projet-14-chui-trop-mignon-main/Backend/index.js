// imports
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const router = require('./app/routers');

// Swagger importation

const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

const options = {

    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Chui-Trop-Meugnon',
            version: '1.0.0',
            description: 'An API made with express and documented with Swagger. For now, all roads can be only tested with insomnia, postman...',
            license: {
                name: 'MIT',
            }
        },
        servers: [
            {
                url: 'http://localhost:3001',
                description: 'Main production server'
            },
        ],
    },

    apis: ['./app/routers/*.js'],

};

// uncomment it for deployment and add corsOptions on app.use(cors())
/*
const corsOptions = {
    origin: ['http://tropmeugnon.surge.sh', 'https://tropmeugnon.surge.sh']
};
*/

const specs = swaggerJSdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(cors());

// accepting using json
app.use(express.json());

// router using
app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});