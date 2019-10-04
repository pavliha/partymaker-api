'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Photo extends Model {

  user() {
    return this.belongsTo('App/Models/User')
  }

  place() {
    return this.belongsTo('App/Models/Place')
  }

}

module.exports = Photo
