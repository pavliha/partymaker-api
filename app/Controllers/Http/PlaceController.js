/* eslint-disable radix,no-empty-function */
const Place = use('App/Models/Place')
const PlaceRepository = use('App/Repositories/Place')

/**
 * Resourceful controller for interacting with places
 */
class PlaceController {
  /**
   * Show a list of all places.
   * GET places
   */
  async index({ request }) {
    const { page, limit } = request.all()
    return Place.query().paginate({
      page: page || 1,
      limit: limit || 10,
    })
  }

}

module.exports = PlaceController
