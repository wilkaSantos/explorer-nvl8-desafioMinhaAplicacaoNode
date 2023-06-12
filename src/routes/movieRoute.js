const { Router } = require('express');
const movieController = require('../controllers/moviesControllers');

const movieRouter = Router();
const movieControll = new movieController();

movieRouter.post('/:id_user', movieControll.create);
movieRouter.delete('/:id_movie', movieControll.delete);

module.exports = movieRouter;