const Route = use('Route')

/**
 *
 * Place routes
 *
 * */
Route.resource('places', 'Place/PlaceController')
  .validator([
    ['places.store', 'Place/Store'],
    ['places.update', 'Place/Update'],
    ['places.destroy', 'Place/Destroy'],
  ])
  .middleware(new Map([[['index', 'store', 'update', 'destroy'], ['auth']]]))
  .apiOnly()

Route.resource('places.photos', 'Place/PhotoController')
  .validator([
    ['places.photos.store', 'Place/Photo/Store'],
    ['places.photos.update', 'Place/Photo/Update'],
    ['places.photos.destroy', 'Place/Photo/Destroy'],
  ])
  .middleware(new Map([[['index', 'store', 'update', 'destroy'], ['auth']]]))
  .apiOnly()

Route.resource('places.contacts', 'Place/ContactController')
  .validator([
    ['places.contacts.store', 'Place/Contact/Store'],
    ['places.contacts.update', 'Place/Contact/Update'],
    ['places.contacts.destroy', 'Place/Contact/Destroy'],
  ])
  .middleware(new Map([[['index', 'store', 'update', 'destroy'], ['auth']]]))
  .apiOnly()

