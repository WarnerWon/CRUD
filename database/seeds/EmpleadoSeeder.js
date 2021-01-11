'use strict'

/*
|--------------------------------------------------------------------------
| EmpleadoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Empleado = 'App/Models/Empleado'

class EmpleadoSeeder {
  async run () {
    
    const empleadosArray = await Factory
      .model(Empleado)
      .createMany(25)
    console.log(empleadosArray)
  }
}

module.exports = EmpleadoSeeder
