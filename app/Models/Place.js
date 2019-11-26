const { basename } = require('path')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Place extends Model {

  static get policy() {
    return 'App/Policies/Place'
  }

  static findComplete(id) {
    return this.query()
      .with('requirements')
      .with('photos')
      .with('contacts')
      .with('entertainment')
      .where({ id })
      .firstOrFail()
  }

  setPictureUrl(url) {
    return basename(url)
  }

  getPictureUrl(url) {
    return `${Env.get('APP_URL')}/uploads/${url}`
  }


  entertainment() {
    return this.belongsTo('App/Models/Entertainment')
  }

  requirements() {
    return this.hasOne('App/Models/Requirement')
  }

  photos() {
    return this.hasMany('App/Models/Photo')
  }

  contacts() {
    return this.hasOne('App/Models/Contact')
  }
}

module.exports = Place
