const { difference, intersection } = require('lodash')
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

  async diffPhotos(photos) {
    const oldPhotos = (await this.photos().fetch()).toJSON().map(photo => photo.url)
    const newPhotos = photos.map(photo => photo.url)
    const toAdd = difference(newPhotos, oldPhotos)
    const toRemove = difference(oldPhotos, intersection(newPhotos, oldPhotos))
    await this.photos().createMany(toAdd.map(url => ({ url: basename(url) })))
    await Promise.all(toRemove.map(async url => this.photos().where({ url: basename(url) }).delete()))
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
