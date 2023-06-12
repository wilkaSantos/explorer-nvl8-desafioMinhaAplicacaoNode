const { request } = require('express');
const baseConnection = require('../database/knex');
const { hash, compare } = require('bcryptjs');

class userController{

    async create(request, response){
        const { username, user_email, user_password } = request.body;
        const userExists =  await baseConnection('users').where({ user_email });

        if(userExists.length >= 1){
            return response.json({'message': 'E-mail já se encontra cadasrado.'});
        }

        const password = await hash(user_password, 7);
        await baseConnection('users').insert({ username, user_email, password });
    
        return response.json({'message': 'Usuario criado.'});
    }

    async delete(request, response){
        const { id_user } = request.params;
        const moviesExists = await baseConnection('movies').where({ id_user });

        if(moviesExists.length >= 1){
            return response.json({ 'message': 'Usuario nao pode ser excluir, pois existem filmes relacionados.' });
        }

        await baseConnection('users').where({ id_user }).delete();
        return response.json({ 'message': 'Usuario excluido.' });
    } 

}

module.exports = userController;