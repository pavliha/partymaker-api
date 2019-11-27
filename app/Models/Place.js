const { difference, intersection } = require('lodash')
const { basename } = require('path')

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

  async syncPhotos(photos) {
    const oldPhotos = await this._getPhotos()
    const newPhotos = photos.map(photo => photo.url)
    const toAdd = difference(newPhotos, oldPhotos)
    const toRemove = difference(oldPhotos, intersection(newPhotos, oldPhotos))
    await this._addPhotos(toAdd)
    await this._removePhotos(toRemove)
  }

  async _getPrices() {
    const prices = await this.prices().fetch()
    return prices.toJSON().map(price => price.title)
  }

  _addPrices(toAdd) {
    return this.prices().createMany(toAdd.map(title => ({ title })))
  }

  async _removePrices(toRemove) {
    return Promise.all(toRemove.map(async title => this.prices().where({ title }).delete()))
  }

  async syncPrices(prices) {
    const oldPrices = await this._getPrices()
    const newPrices = prices.map(price => price.title)
    const toAdd = difference(newPrices, oldPrices)
    const toRemove = difference(oldPrices, intersection(newPrices, oldPrices))
    await this._addPrices(toAdd)
    await this._removePrices(toRemove)
  }

  async _getServices() {
    const services = await this.additional_services().fetch()
    return services.toJSON().map(service => service.title)
  }

  _addServices(toAdd) {
    return this.additional_services().createMany(toAdd.map(title => ({ title })))
  }

  async _removeServices(toRemove) {
    return Promise.all(toRemove.map(async title => this.additional_services().where({ title }).delete()))
  }

  async syncServices(services) {
    const oldServices = await this._getServices()
    const newServices = services.map(service => service.title)
    const toAdd = difference(newServices, oldServices)
    const toRemove = difference(oldServices, intersection(newServices, oldServices))
    await this._addServices(toAdd)
    await this._removeServices(toRemove)
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
