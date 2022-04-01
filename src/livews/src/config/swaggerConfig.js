
const swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Live247 Swagger API',
      version: '1.0.0',
      description: 'Live247 Api Interfaces'
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./src/routes/api/*.js', './src/routes/liveapi/*.js','./src/dbmodels/sequelizeEMRModels/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
module.exports = openapiSpecification
