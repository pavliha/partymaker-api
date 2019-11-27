const { difference, intersection } = require('lodash')
const { basename } = require('path')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')
const Drive = use('Drive')

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


  async _getPhotos() {
    const photos = await this.photos().fetch()
    return photos.toJSON().map(photo => photo.url)
  }

  _addPhotos(toAdd) {
    return this.photos().createMany(toAdd.map(url => ({ url: basename(url) })))
  }

  async _removePhotos(toRemove) {
    return Promise.all(toRemove.map(async url => {
      const filename = basename(url)
      await Drive.delete(filename)
      return this.photos().where({ url: filename }).delete()
    }))
  }

  async diffPhotos(photos) {
    const oldPhotos = await this._getPhotos()
    const newPhotos = photos.map(photo => photo.url)
    const toAdd = difference(newPhotos, oldPhotos)
    const toRemove = difference(oldPhotos, intersection(newPhotos, oldPhotos))
    await this._addPhotos(toAdd)
    await this._removePhotos(toRemove)
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
