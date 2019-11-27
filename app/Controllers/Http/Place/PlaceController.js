const Place = use('App/Models/Place')

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
    const { requirements, contacts, photos, prices, additional_services, ...form } = request.validated()
    const place = await Place.create(form)
    if (requirements) await place.requirements().create(requirements)
    if (contacts) await place.contacts().create(contacts)
    if (photos) await place.photos().createMany(photos)
    if (prices) await place.createMany(prices)
    if (additional_services) await place.createMany(additional_services)
    return response.created(await Place.findComplete(place.id))
  }

  /**
   * Display a single place.
   * GET places/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    return Place.findComplete(params.id)
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
    const { requirements, contacts, photos, prices, additional_services, ...form } = request.validated()
    place.merge({ ...form, admin_id: auth.user.id })
    if (requirements) await place.requirements().update(requirements)
    if (contacts) await place.contacts().update(contacts)
    if (photos) await place.syncPhotos(photos)
    if (prices) await place.syncPrices(prices)
    if (additional_services) await place.syncServices(additional_services)
    await place.save()
    return response.updated(await Place.findComplete(place.id))
  }

  /**
   * Delete a place with id.
   * DELETE places/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ place, response }) {
    await place.delete()
    return response.deleted()
  }
}

module.exports = PlaceController
