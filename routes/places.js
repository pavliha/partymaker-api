const Route = use('Route')

/**
 *
 * Place routes
 *
 * */

Route.patch('/places/sort', 'Place/PlaceController.sort')

Route.resource('places', 'Place/PlaceController')
  .validator([
    ['places.store', 'Place/Store'],
    ['places.update', 'Place/Update'],
    ['places.destroy', 'Place/Destroy'],
  ])
  .middleware(new Map([[['index', 'store', 'update', 'destroy'], ['auth']]]))
  .apiOnly()

Route.get('/places/:place_id/photos', 'Place/PhotoController.index').middleware('auth')
Route.post('/places/:place_id/photos', 'Place/PhotoController.store').validator('Place/Photo/Store').middleware('auth')
Route.post('/places/photos/:id', 'Place/PhotoController.show').middleware('auth')
Route.put('/places/photos/:id', 'Place/PhotoController.update').validator('Place/Photo/Update').middleware('auth')
Route.delete('/places/photos/:id', 'Place/PhotoController.destroy').validator('Place/Photo/Destroy').middleware('auth')
