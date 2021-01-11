'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpleadoSchema extends Schema {
  up () {
    this.create('empleados', (table) => {
      table.increments()
      table.string('Nombre').notNullable()
      table.string('Apellido_Paterno').notNullable()
      table.string('Apellido_Materno').nullable()
      table.string('Puesto').notNullable()
      table.integer('Salario').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empleados')
  }



}

module.exports = EmpleadoSchema
