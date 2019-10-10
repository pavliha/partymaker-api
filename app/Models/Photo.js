'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Photo extends Model {

  user() {
    return this.belongsTo('App/Models/User')
  }

  place() {
    return this.belongsTo('App/Models/Place')
  }

  getUrl(url) {
    return `${Env.get('APP_URL')}${url}`
  }

}

module.exports = Photo
