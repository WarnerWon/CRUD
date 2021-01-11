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

Route.get('/index', 'EmpleadoController.index').middleware('edad')
Route.post('/create', 'EmpleadoController.store').middleware('edad')
Route.get('/show/:id', 'EmpleadoController.show').middleware('edad')
Route.put('/update/:id', 'EmpleadoController.update').middleware('edad')
Route.delete('/delete/:id', 'EmpleadoController.delete').middleware('edad')