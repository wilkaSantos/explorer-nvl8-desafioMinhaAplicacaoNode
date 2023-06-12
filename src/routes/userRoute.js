const { Router } = require('express');
const userController = require('../controllers/usersControllers');
const UserRouter = Router();
const userControll = new userController();

UserRouter.post('/', userControll.create);
UserRouter.delete('/:id_user', userControll.delete);

module.exports  = UserRouter;