const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
     async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    
      },

    async create(request, response) { //adiciona uma resposta ao '/'
      // Response.send('to funcionando'); //retorna uma string
      const { name, email, whatsapp, city, uf } = request.body;
  
      // const data = request.body;
      // console.log(data);
      const id = crypto.randomBytes(4).toString('HEX');
  
      await connection('ongs').insert({
          id,
          name,
          email,
          whatsapp,
          city,
          uf,
      });
  
      return response.json({id});
      /**
       *return response.json({
          evento: 'Semana OmniStack 11.0',
          aluno: 'Suellen Karin'
      })//retorno de json mockado
       */
  
  }
}