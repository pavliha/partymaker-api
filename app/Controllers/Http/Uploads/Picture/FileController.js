const { basename } = require('path')
const Drive = use('Drive')
const ImageProcessor = use('ImageProcessor')
const utils = require('../../../../../utils')
const Env = use('Env')

/**
 @typedef {import('@adonisjs/framework/src/Request')} Request
 @typedef {import('@adonisjs/framework/src/Response')} Response
 @typedef {import('@adonisjs/framework/src/View')} View
 */


/**
 * Resourceful controller for interacting with assets
 */
class FileController {

  /**
   * Create/save a new upload.
   * POST assets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const type = request.input('type')
    const picture = await utils.processMultipart(request.multipart)
    const fileName = utils.getFileName(picture)
    await Drive.put(fileName, picture.stream)

    if (type === 'thumbnail') ImageProcessor.createThumbnail(fileName)
    if (type === 'slide') ImageProcessor.createSlide(fileName)

    return response.created({ url: `${Env.get('APP_URL')}/uploads/${fileName}` })
  }

  /**
   * Delete a upload with id.
   * DELETE assets/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ params: { url }, response }) {
    const fileName = basename(url)
    await Drive.delete(fileName)
    return response.deleted('Upload was deleted successfully!')
  }
}

module.exports = FileController
