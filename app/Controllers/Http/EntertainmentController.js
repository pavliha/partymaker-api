'use strict'

const Entertainment = use('App/Models/Entertainment')

/**
 * Resourceful controller for interacting with entertainments
 */
class EntertainmentController {

  /**
   * Show a list of all entertainments.
   * GET entertainments
   */
  async index({ transform, auth }) {
    const entertainments = await Entertainment.query()
      .with('places', builder => auth || builder.where({ is_active: true }))
      .where({ is_active: true })
      .orderBy('order')
      .fetch()

    return transform.collection(entertainments, 'EntertainmentList')
  }

  /**
   * Create/save a new entertainment.
   * POST entertainments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const fields = request.all()
    const entertainment = await Entertainment.create({ ...fields, is_active: true })
    return response.created(entertainment)
  }

  /**
   * Display a single entertainment.
   * GET entertainments/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    return Entertainment.query()
      .with('places')
      .where({ id: params.id })
      .firstOrFail()
  }

  /**
   * Update entertainment details.
   * PUT or PATCH entertainments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response, entertainment }) {
    const fields = request.all()
    entertainment.merge(fields)
    await entertainment.save()
    return response.updated(entertainment)
  }

  /**
   * Delete a entertainment with id.
   * DELETE entertainments/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ entertainment, response }) {
    await entertainment.delete()
    return response.deleted()
  }

  /**
   * Sort entertainments.
   * POST entertainments/sort
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async sort({ request, response }) {
    request.body.map(async (e) => {
      const entertainment = await Entertainment.find(e.id)
      entertainment.merge({ order: e.order })
      await entertainment.save()
    })
    return response.updated()
  }


}

module.exports = EntertainmentController
