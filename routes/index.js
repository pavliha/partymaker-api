const Route = use('Route')

/**
 *
 * Swagger route
 *
 * */
Route.get('/', 'SwaggerController.index')
Route.get('/log', 'SwaggerController.log')

require('./auth')
require('./users')
require('./places')
require('./entertainments')
require('./uploads')
