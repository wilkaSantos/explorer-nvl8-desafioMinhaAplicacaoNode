const baseConnection = require('../database/knex');

class movieController{

    async create(request, response){
        const { title, description, rating } = request.body;
        const { id_user } = request.params;

        await baseConnection('movies').insert({ title, description, rating, id_user });
        
        return response.json({ 'message': 'Filme cadastrado com Sucesso.' });
    }

    async delete(request, response){
        const { id_movie } = request.params;
        const tagExists = await baseConnection('tags').where({ id_movie });

        if(tagExists.length >= 1){
            return response.json({ 'message': 'Não será possível, excluir o filme. Pois existe tag vinculada.' });
        }

        await baseConnection('movies').where({ id_movie }).delete();

        return response.json({ 'message': 'Filme excluido.' });
    }
}

module.exports = movieController;