const Drive = use('Drive')
const Upload = use('Upload')
const Image = use('Image')

/**
 @typedef {import('@adonisjs/framework/src/Request')} Request
 @typedef {import('@adonisjs/framework/src/Response')} Response
 @typedef {import('@adonisjs/framework/src/View')} View
 */

/**
 * Resourceful controller for interacting with uploads
 */
class UploadsController {

  /**
   * Create a new upload.
   * POST /uploads/url
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async url({ request, response }) {
    const { url, type } = request.all()
    const upload = await Upload.create(url)
    const image = await Image.create(upload, type)
    await image.resize(upload.name, type)
    return response.created({ url: image.getUrl() })
  }

  /**
   * Create a file new upload.
   * POST uploads/file
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async file({ request, response }) {
    const type = request.input('type')
    const upload = await Upload.create(request.multipart)
    const image = await Image.create(upload)
    await image.resize(upload.name, type)
    return response.created({ url: image.url })
  }

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
