const Route = use('Route')


Route.delete('/upload/:filename', 'Uploads/UploadsController.destroy')
  .middleware('auth')


Route.post('/upload/picture/file', 'Uploads/Picture/FileController.store')
  .middleware('auth')


Route.post('/upload/picture/url', 'Uploads/Picture/UrlController.store')
  .middleware('auth')
