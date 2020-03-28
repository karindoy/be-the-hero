const express = require('express');
const OngsController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma info no backend
 * POST: Criar uma info no back-end
 * PUT: Alterar uma info no back-end
 * DELETE: Deletar uma info no back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros enviados na rota após "?" ()
 * /users?name=karin 
 * Route Params: parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select(*).where()
 */
routes.post('/session', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;