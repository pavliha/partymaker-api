'use strict'

const Contact = use('App/Models/Contact')


/**
 * Resourceful controller for interacting with contacts
 */
class ContactController {
  /**
   * Show a list of all contacts.
   * GET /places/:places_id/contacts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async index({ request, params: { places_id } }) {
    const { page, limit } = request.all()
    return Contact.query()
      .with('user')
      .where({ place_id: places_id })
      .paginate({ page, limit })
  }

  /**
   * Create/save a new contact.
   * POST /places/:places_id/contacts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, params }) {
    const form = request.all()
    const place = await Contact.create({
      place_id: params.places_id,
      ...form,
    })
    return response.created(place)
  }

  /**
   * Display a single contact.
   * GET /places/:places_id/contacts/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    return Contact.query()
      .where({ place_id: params.places_id, id: params.id })
      .firstOrFail()
  }

  /**
   * Update place details.
   * PUT or PATCH places/:places_id/contacts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response, contact }) {
    contact.merge(request.all())
    await contact.save()
    return response.updated(contact)
  }

  /**
   * Delete a contact with id.
   * DELETE places/:places_id/contacts/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ contact, response }) {
    await contact.delete()
    return response.deleted()
  }
}

module.exports = ContactController
