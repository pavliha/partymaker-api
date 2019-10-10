'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Asset extends Model {
  static get policy() {
    return 'App/Policies/Asset'
  }

  getUrl(url) {
    return `${Env.get('APP_URL')}${url}`
  }

}

module.exports = Asset
