const Drive = use('Drive')

/**
 @typedef {import('@adonisjs/framework/src/Request')} Request
 @typedef {import('@adonisjs/framework/src/Response')} Response
 @typedef {import('@adonisjs/framework/src/View')} View
 */


/**
 * Resourceful controller for interacting with assets
 */
class UploadsController {

  /**
   * Delete a upload with id.
   * DELETE uploads/:filename
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ params: { filename }, response }) {
    await Drive.delete(filename)
    return response.deleted('Upload was deleted successfully!')
  }
}

module.exports = UploadsController
