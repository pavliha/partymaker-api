'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * EntertainmentListTransformer class
 *
 * @class EntertainmentListTransformer
 * @constructor
 */
class EntertainmentListTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */

  _removeExtra(place) {
    const model = { ...place }
    delete model.description
    delete model.admin_id
    delete model.created_at
    delete model.updated_at
    return model
  }

  transform(model, context) {
    const entertainment = model.toJSON()

    return {
      ...entertainment,
      places: entertainment.places.map(place => this._removeExtra(place, context))
    }
  }
}

module.exports = EntertainmentListTransformer
