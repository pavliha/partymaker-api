const Route = use('Route')

/**
 *
 * Authentication routes
 *
 * */

Route.post('auth/login', 'LoginController.login').validator('Auth/Login')
Route.post('auth/logout', 'LoginController.logout')
Route.post('auth/social', 'LoginController.social').validator('Auth/Social')

Route.post('auth/register', 'RegisterController.register').validator('Auth/Register')
Route.post('auth/activate/:hash', 'RegisterController.activate')

Route.post('auth/password/forgot', 'PasswordController.forgot').validator('Auth/Password/Forgot')
Route.post('auth/password/reset/:hash', 'PasswordController.reset').validator('Auth/Password/Reset')
Route.put('auth/password/update', 'PasswordController.update').validator('Auth/Password/Update')

Route.get('auth/user', 'AuthUserController.show').middleware('auth')
Route.put('auth/user', 'AuthUserController.update').validator('Auth/User/Update').middleware('auth')

Route.get('auth/user/account', 'AuthAccountController.show')
Route.put('auth/user/account', 'AuthAccountController.update').validator('Auth/User/Account/Update')
