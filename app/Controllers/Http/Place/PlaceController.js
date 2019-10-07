'use strict'

const Asset = use('App/Models/Asset')
const Place = use('App/Models/Place')
const Rating = use('App/Models/Rating')
const Order = use('App/Models/Order')

/**
 * Resourceful controller for interacting with places
 */
class PlaceController {
  /**
   * Show a list of all places.
   * GET places
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async index({ request }) {
    const { page, limit } = request.all()

    return Place.query()
      .with('entertainment')
      .paginate({ page, limit })
  }

  /**
   * Create/save a new place.
   * POST places
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const fields = request.all()
    const place = await Place.create(fields)
    return response.created(place)
  }

  /**
   * Display a single place.
   * GET places/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    const place = await Place
      .query()
      .with('photos')
      .with('comments', (builder) => builder.with('user'))
      .with('contacts')
      .with('entertainment')
      .where({ id: params.id })
      .firstOrFail()

    return {
      ...place.toJSON(),
      rating: await Rating.average(place.id),
      rating_count: await Rating.count(place.id),
      order_count: await Order.count(place.id),
    }
  }

  /**
   * Update place details.
   * PUT or PATCH places/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ auth, request, response, place }) {
    const fields = request.all()
    place.merge({ ...fields, admin_id: auth.user.id })
    await place.save()
    return response.updated(place)
  }

  /**
   * Delete a place with id.
   * DELETE places/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ place, response }) {
    const asset = await Asset.findBy({ url: place.picture_url })
    if (asset) asset.delete()
    await place.delete()
    return response.deleted()
  }
}

module.exports = PlaceController
