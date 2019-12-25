const Place = use('App/Models/Place')

/**
 * Resourceful controller for interacting with places
 */


const updateOrCreate = async (relation, form) => {
  const model = await relation.fetch()
  return model ? relation.update(form) : relation.create(form)
}


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
    if (prices) await place.prices().createMany(prices)
    if (additional_services) await place.additional_services().createMany(additional_services)
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
    await place.save()
    await updateOrCreate(place.requirements(), requirements)
    await updateOrCreate(place.contacts(), contacts)
    await place.syncPhotos(photos)
    await place.syncPrices(prices)
    await place.syncServices(additional_services)
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

  /**
   * Sort places.
   * PATCH places/sort
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async sort({ request, response }) {
    const promises = request.body.map(async (e) => {
      const place = await Place.find(e.id)
      place.merge({ order: e.order })
      await place.save()
      return { id: place.id, title: place.title, order: place.order }
    })

    const results = await Promise.all(promises)
    return response.updated(results)
  }
}

module.exports = PlaceController
