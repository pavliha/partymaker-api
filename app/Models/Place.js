const { basename } = require('path')
const { compare } = require('../../utils')
const { pick } = require('lodash')

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
      .with('prices')
      .with('contacts')
      .with('additional_services')
      .with('entertainment')
      .where({ id })
      .firstOrFail()
  }

  async syncPrices(newPrices) {
    const oldPrices = await this.prices().fetch()
    const [toAdd, toRemove] = compare(oldPrices.toJSON(), newPrices, 'title')
    this.prices().createMany(toAdd.map(m => pick(m, ['title', 'cost'])))
    await this.prices().whereIn('title', toRemove.map(m => m.title)).delete()
  }

  async syncServices(newServices) {
    const oldServices = await this.additional_services().fetch()
    const [toAdd, toRemove] = compare(oldServices.toJSON(), newServices, 'title')
    const toCreate = toAdd.map(m => pick(m, ['title', 'description', 'price']))
    this.additional_services().createMany(toCreate)
    await this.additional_services().whereIn('title', toRemove.map(m => m.title)).delete()
  }

  async syncPhotos(newPhotos) {
    const oldPhotos = await this.photos().fetch()
    const [toAdd, toRemove] = compare(oldPhotos.toJSON(), newPhotos, 'url')
    await this.photos().createMany(toAdd.map(m => ({ url: basename(m.url) })))
    const urlsToRemove = toRemove.map(m => basename(m.url))
    await this.photos().whereIn('url', urlsToRemove).delete()
    urlsToRemove.map(filename => Drive.delete(filename))
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

  prices() {
    return this.hasMany('App/Models/Price')
  }

  additional_services() {
    return this.hasMany('App/Models/AdditionalService')
  }
}

module.exports = Place
