'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {


  static count(place_id) {
    return Order.query().where({ place_id }).getCount()
  }

  room() {
    return this.belongsTo('App/Models/Room')
  }

}

module.exports = Order
