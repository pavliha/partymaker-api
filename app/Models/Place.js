'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Place extends Model {

  static get policy() {
    return 'App/Policies/Place'
  }

  entertainment() {
    return this.belongsTo('App/Models/Entertainment')
  }

  ratings() {
    return this.hasMany('App/Models/Rating')
  }
}

module.exports = Place
