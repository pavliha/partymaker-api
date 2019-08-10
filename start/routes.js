/* eslint-disable max-len */
const Route = use('Route')

const SUD = new Map([[['store', 'update', 'destroy'], ['auth']]])

Route.get('/', 'DocsController.index')
/**
 *
 * Authentication routes
 *
 * */
Route.post('/auth/login', 'AuthController.login').validator('Auth/Login')
Route.post('/auth/register', 'AuthController.register').validator('Auth/Register')
Route.post('/auth/login/facebook', 'AuthController.facebook')
Route.post('/auth/login/google', 'AuthController.google')
Route.get('/auth/user', 'AuthController.user').middleware('auth')

/**
 *
 * User routes
 *
 * */

Route.resource('users', 'UserController')
  .validator([['users.store', 'User/Create'], ['users.update', 'User/Edit']])
  .middleware(SUD)

/**
 *
 * Places routes
 *
 * */

Route.resource('places', 'PlaceController')
  .validator([['places.store', 'Place/Create'], ['places.update', 'Place/Edit']])
  .middleware(SUD)

/**
 *
 * Group routes
 *`
 * */

Route.resource('groups/:group_id/members', 'Group/MemberController').middleware('auth')

Route.resource('groups', 'GroupController')
  .validator([['groups.store', 'Group/Create'], ['groups.update', 'Group/Edit']])
  .middleware(SUD)

/**
 *
 * Places routes
 *
 * */

Route.resource('places', 'PlaceController').middleware(SUD)

Route.resource('upload', 'UploadController')
