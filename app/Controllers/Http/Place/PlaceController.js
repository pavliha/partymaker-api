'use strict'

const Drive = use('Drive')
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
    const { requirements, contacts, photos, ...form } = request.all()
    const place = await Place.create(form)
    if (requirements) await place.requirements().create(requirements)
    if (contacts) await place.contacts().create(contacts)
    if (photos) await place.photos().createMany(photos)
    const createdPlace = this.show({ params: { id: place.id } })
    return response.created(createdPlace)
  }

  /**
   * Display a single place.
   * GET places/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    return Place
      .query()
      .with('requirements')
      .with('photos')
      .with('contacts')
      .with('entertainment')
      .where({ id: params.id })
      .firstOrFail()
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
    await place.delete()
    Drive.delete(place.picture_url)
    return response.deleted()
  }
}

module.exports = PlaceController
