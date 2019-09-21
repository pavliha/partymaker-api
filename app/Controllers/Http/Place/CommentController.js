'use strict'

const Comment = use('App/Models/Comment')


/**
 * Resourceful controller for interacting with comments
 */
class CommentController {
  /**
   * Show a list of all comments.
   * GET /places/:places_id/comments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async index({ request, params: { places_id } }) {
    const { page, limit } = request.all()
    return Comment.query()
      .with('user')
      .where({ place_id: places_id })
      .paginate({ page, limit })
  }

  /**
   * Create/save a new comment.
   * POST /places/:places_id/comments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth, params }) {
    const { text } = request.all()
    const place = await Comment.create({
      user_id: auth.user.id,
      place_id: params.places_id,
      text
    })
    return response.created(place)
  }

  /**
   * Display a single comment.
   * GET /places/:places_id/comments/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    return Comment.query()
      .where({ place_id: params.places_id, id: params.id })
      .with('user')
      .firstOrFail()
  }

  /**
   * Update place details.
   * PUT or PATCH places/:places_id/comments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response, comment }) {
    const { text } = request.all()
    comment.merge({ text })
    await comment.save()
    return response.updated(comment)
  }

  /**
   * Delete a comment with id.
   * DELETE places/:places_id/comments/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ comment, response }) {
    await comment.delete()
    return response.deleted()
  }
}

module.exports = CommentController
