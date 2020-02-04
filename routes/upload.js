const Route = use('Route')

Route.post('/upload/file', 'UploadsController.file').middleware('auth')
Route.post('/upload/url', 'UploadsController.url').middleware('auth')
Route.delete('/upload/:filename', 'UploadsController.destroy').middleware('auth')

