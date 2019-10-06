const Route = use('Route')


Route.get('assets/url', 'Asset/UrlController.index').middleware('auth')
Route.get('assets/url/:url', 'Asset/UrlController.show').middleware('auth')
Route.post('assets/url', 'Asset/UrlController.store').middleware('auth').validator('Asset/Url/Store')
Route.delete('assets/url/:url', 'Asset/UrlController.destroy').middleware('auth').validator('Asset/Url/Destroy')


Route.resource('assets', 'Asset/AssetController')
  .validator([['assets.store', 'Asset/Store'], ['assets.destroy', 'Asset/Destroy']])
  .middleware('auth')
  .apiOnly()
