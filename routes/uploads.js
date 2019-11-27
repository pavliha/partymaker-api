const Route = use('Route')


Route.delete('/uploads/:filename', 'Uploads/UploadsController.destroy')
  .middleware('auth')


Route.post('/uploads/picture/file', 'Uploads/Picture/FileController.store')
  .middleware('auth')


Route.post('/uploads/picture/url', 'Uploads/Picture/UrlController.store')
  .middleware('auth')
