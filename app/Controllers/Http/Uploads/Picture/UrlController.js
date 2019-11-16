const { generateNameFromUrl } = require('../../../../../utils')
const axios = require('axios')
const Drive = use('Drive')
const ImageProcessor = use('ImageProcessor')

/**
 * Resourceful controller for interacting with assets
 */
class UrlController {

  /**
   * Create/save a new upload.
   * POST /uploads/picture/url
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { url, type } = request.all()
    const fileName = generateNameFromUrl(url)
    const picture = await axios.get(url, { responseType: 'arraybuffer' })
    await Drive.put(fileName, Buffer.from(picture.data, 'base64'))
    if (type === 'thumbnail') ImageProcessor.createThumbnail(fileName)
    if (type === 'slide') ImageProcessor.createSlide(fileName)
    return response.created({ url: `/uploads/${fileName}` })
  }
}

module.exports = UrlController
