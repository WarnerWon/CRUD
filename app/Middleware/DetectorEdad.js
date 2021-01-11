'use strict'

const Response = require('@adonisjs/framework/src/Response')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class DetectorEdad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request , response }, next ) {
    
    if (request.header('edad') >= 18){
      await next()
    }

    return response.status(401).json({mensaje:'No autorizado'})

  }
}

module.exports = DetectorEdad
