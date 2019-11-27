'use strict'

const Photo = use('App/Models/Photo')

/**
 * Resourceful controller for interacting with photos
 */
class PhotoController {
  /**
   * Show a list of all photos.
   * GET /places/:places_id/photos
   *
   * @param {object} ctx
   */
  async index({ params: { place_id } }) {
    return Photo.query()
      .with('user')
      .where({ place_id })
      .fetch()
  }

  /**
   * Create/save a new photo.
   * POST /places/:place_id/photos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, params: { place_id } }) {
    const { url } = request.all()
    const place = await Photo.create({ place_id, url, })
    return response.created(place)
  }

  /**
   * Display a single photo.
   * GET /places/photos/:id
   *
   * @param {object} ctx
   */
  async show({ params: { id } }) {
    return Photo.query()
      .where({ id })
      .with('user')
      .firstOrFail()
  }

  /**
   * Update place details.
   * PUT or PATCH places/photos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response, photo }) {
    const { url } = request.all()
    photo.merge({ url })
    await photo.save()
    return response.updated(photo)
  }

  /**
   * Delete a photo with id.
   * DELETE places/photos/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ photo, response }) {
    await photo.delete()
    return response.deleted()
  }
}

module.exports = PhotoController
