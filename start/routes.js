'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/* Login */
Route.post('auth/login', 'AuthController.login').validator('AuthLogin')
Route.post('auth/register', 'AuthController.register').validator('UserRegister')
Route.post('auth/confirm/:token', 'AuthController.confirmRegister')

Route.group(() => {
  /* Login */
  Route.post('auth/logout', 'AuthController.logout').validator('AuthLogout')
  Route.get('auth/profile', 'AuthController.profile')

  /* Product */
  Route.get('products', 'ProductController.findAll')
  Route.get('products/:id', 'ProductController.findOne')
  Route.post('products', 'ProductController.register').validator('Product')
  Route.put('products/:id', 'ProductController.update').validator('Product')
  Route.delete('products/:id', 'ProductController.delete')

  /* User */
  Route.get('users', 'UserController.findAll')
  Route.get('users/:id', 'UserController.findOne')
  Route.post('users', 'UserController.register').validator('UserRegister')
  Route.put('users/:id', 'UserController.update').validator('UserUpdate')
  Route.delete('users/:id', 'UserController.delete')

  /* Generic */
  Route.post('upload/:type/:id', 'GenericController.imagesUpload')
  Route.delete('upload', 'GenericController.imagesUpdate').validator('UploadUpdateDelete')
  Route.put('upload', 'GenericController.imagesUpdate').validator('UploadUpdateDelete')
}).middleware('auth')
