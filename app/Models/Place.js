'use strict'

const Model = use('Model')

class Place extends Model {
  static get table() {
    return 'places'
  }

  static get policy() {
    return 'App/Policies/Place'
  }

}

module.exports = Place
