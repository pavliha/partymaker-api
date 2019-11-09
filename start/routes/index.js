const Route = use('Route')

/**
 *
 * Swagger route
 *
 * */
Route.get('/', 'SwaggerController.index')
Route.post('/log', 'SwaggerController.log')

require('./auth')
require('./users')
require('./places')
require('./entertainments')
require('./asset')
