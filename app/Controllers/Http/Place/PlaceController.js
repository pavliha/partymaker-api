const { difference, intersection } = require('lodash')
const { basename } = require('path')
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
    if (requirements) await place.requirement().create(requirements)
    if (contacts) await place.contacts().create(contacts)
    if (photos) await place.photos().createMany(photos)
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
    const { requirements, contacts, photos, ...form } = request.all()

    const placeForm = {
      title: form.title,
      picture_url: form.picture_url,
      working_hours: form.working_hours,
      price: form.price,
      entertainment_id: form.entertainment_id,
      description: form.description,
    }

    place.merge({ ...placeForm, admin_id: auth.user.id })
    if (requirements) await place.requirements().update(requirements)
    if (contacts) await place.contact().update(contacts)

    if (photos) {
      const oldPhotoModels = (await place.photos().fetch()).toJSON()
      const oldPhotos = oldPhotoModels.map(photo => photo.url)
      const newPhotos = photos.map(photo => photo.url)
      const toAdd = difference(newPhotos, oldPhotos)
      const toRemove = difference(oldPhotos, intersection(newPhotos, oldPhotos))
      place.photos().createMany(toAdd.map(url => ({ url: basename(url) })))
      await Promise.all(toRemove.map(async url => {
        const fileName = basename(url)
        await Drive.delete(fileName)
        return place.photos().where({ url: fileName }).delete()
      }))
    }

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
    Drive.delete(place.picture_url)
    return response.deleted()
  }
}

module.exports = PlaceController
