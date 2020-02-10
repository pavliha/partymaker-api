const Route = use('Route')

/**
 *
 * Place routes
 *
 * */

Route.patch('/places/sort', 'PlaceController.sort')

Route.resource('places', 'PlaceController')
  .validator([
    ['places.store', 'Place/Store'],
    ['places.update', 'Place/Update'],
    ['places.destroy', 'Place/Destroy'],
  ])
  .middleware(new Map([[['index', 'store', 'update', 'destroy'], ['auth']]]))
  .apiOnly()

Route.get('/places/:place_id/photos', 'PhotoController.index').middleware('auth')
Route.post('/places/:place_id/photos', 'PhotoController.store').validator('Place/Photo/Store').middleware('auth')
Route.post('/places/photos/:id', 'PhotoController.show').middleware('auth')
Route.put('/places/photos/:id', 'PhotoController.update').validator('Place/Photo/Update').middleware('auth')
Route.delete('/places/photos/:id', 'PhotoController.destroy').validator('Place/Photo/Destroy').middleware('auth')
