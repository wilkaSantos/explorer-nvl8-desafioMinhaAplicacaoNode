const { Router } = require('express');
const userRoute = require('./userRoute');
const movieRoute = require('./movieRoute');
const tagRoute = require('./tagRoute');

const routes = Router();

routes.use('/users', userRoute);
routes.use('/movies', movieRoute);
routes.use('/tags', tagRoute);

module.exports = routes;