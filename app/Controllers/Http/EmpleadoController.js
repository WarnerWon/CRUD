'use strict'

const Empleado = use('App/Models/Empleado')
const { validate } = use('Validator')


class EmpleadoController {
  
  async index () {
    
    return await Empleado.all()
  
  }

  async store ({ request, response }) {

    const rules = {
      Nombre: 'required',
      Ap: 'required',
      Am: 'required',
      Puesto: 'required',
      Salario: 'required|number',
    }

    let emp = request.all()

    const validation = await validate(emp, rules)

    if (validation.fails()) {
      return response.status(418).json({mensaje:'Informacion no valida', explicacion: validation.messages()})
    }

    let newEmpleado = await Empleado.create({
      Nombre: emp.Nombre,
      Apellido_Paterno: emp.Ap,
      Apellido_Materno: emp.Am,
      Puesto: emp.Puesto,
      Salario: emp.Salario
    })

    return response.status(201).json({mensaje:'Informacion aceptada', contenido: newEmpleado})

  }

  async show ({ params, response }) {

    let id = params.id

    let newEmpleado = await Empleado.find(id)

    return response.status(200).json({mensaje:'Informacion aceptada', contenido: newEmpleado})

  }

  async update ({ params, request, response }) {

    const rules = {
      Nombre: 'required',
      Ap: 'required',
      Am: 'required',
      Puesto: 'required',
      Salario: 'required|number',
    }

    let emp = request.all()

    const validation = await validate(emp, rules)

    if (validation.fails()) {
      return response.status(418).json({mensaje:'Informacion no valida', explicacion: validation.messages()})
    }

    let id = params.id

    let newEmpleado = request.all()

    var empleado = await Empleado.find(id)

    empleado.Nombre = newEmpleado.Nombre
    empleado.Apellido_Paterno = newEmpleado.Ap
    empleado.Apellido_Materno = newEmpleado.Am
    empleado.Puesto = newEmpleado.Puesto
    empleado.Salario = newEmpleado.Salario

    await empleado.save()

    return response.status(200).json({mensaje:'Informacion Actualizada', contenido:empleado})


  }

  async delete ({ params, response }) {

    let id = params.id

    var empleado = await Empleado.find(id)

    if (empleado == null) {
      return response.status(404).json({mensaje:'Persona no existente/No encontrada'})
    }
    
    await empleado.delete()

    return response.status(200).json({mensaje:'Informacion Actualizada', contenido:empleado})

  }
}

module.exports = EmpleadoController
