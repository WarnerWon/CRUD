'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Empleado = 'App/Models/Empleado'

Factory.blueprint(Empleado, (faker) => {
  return {
    Nombre: faker.first(),
    Apellido_Paterno: faker.last(),
    Apellido_Materno: faker.last(),
    Puesto: faker.profession(),
    Salario: faker.integer({ min: 1000, max: 100000 })
 
  }
})
