'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rating extends Model {

  static average(place_id) {
    return Rating.query().where({ place_id }).getAvg('rating')
  }

  static count(place_id) {
    return Rating.query().where({ place_id }).getCount()
  }

}

module.exports = Rating
