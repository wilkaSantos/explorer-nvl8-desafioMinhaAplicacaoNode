const { Router } = require('express');
const tagController = require('../controllers/tagsControllers');

const tagRoute = Router();
const tagControll = new tagController();

tagRoute.post('/:id_movie', tagControll.create);
tagRoute.delete('/:id_tag', tagControll.delete);

module.exports = tagRoute;