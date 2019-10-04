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
   * @param {Request} ctx.request
   */
  async index({ request, params: { places_id } }) {
    const { page, limit } = request.all()
    return Photo.query()
      .with('user')
      .where({ place_id: places_id })
      .paginate({ page, limit })
  }

  /**
   * Create/save a new photo.
   * POST /places/:places_id/photos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth, params }) {
    const { url } = request.all()
    const place = await Photo.create({
      user_id: auth.user.id,
      place_id: params.places_id,
      url,
    })
    return response.created(place)
  }

  /**
   * Display a single photo.
   * GET /places/:places_id/photos/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    return Photo.query()
      .where({ place_id: params.places_id, id: params.id })
      .with('user')
      .firstOrFail()
  }

  /**
   * Update place details.
   * PUT or PATCH places/:places_id/photos/:id
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
   * DELETE places/:places_id/photos/:id
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
