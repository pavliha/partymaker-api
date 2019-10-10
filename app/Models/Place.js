'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Place extends Model {

  static get policy() {
    return 'App/Policies/Place'
  }

  getPictureUrl(url) {
    return `${Env.get('APP_URL')}${url}`
  }


  entertainment() {
    return this.belongsTo('App/Models/Entertainment')
  }

  ratings() {
    return this.hasMany('App/Models/Rating')
  }

  comments() {
    return this.hasMany('App/Models/Comment')
  }

  photos() {
    return this.hasMany('App/Models/Photo')
  }

  orders() {
    return this.hasMany('App/Models/Order')
  }

  contacts() {
    return this.hasOne('App/Models/Contact')
  }
}

module.exports = Place
