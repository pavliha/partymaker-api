'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contact extends Model {

  place() {
    return this.belongsTo('App/Models/Place')
  }

}

module.exports = Contact
