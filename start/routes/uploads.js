const Route = use('Route')

Route.post('/uploads/picture/file', 'Uploads/Picture/FileController.store')
  .middleware('auth')


Route.post('/uploads/picture/url', 'Uploads/Picture/UrlController.store')
  .middleware('auth')
