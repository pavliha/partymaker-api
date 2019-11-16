const { basename } = require('path')
const sharp = require('sharp')
const Drive = use('Drive')
const sanitizeFileName = require('sanitize-filename')

/**
 @typedef {import('@adonisjs/framework/src/Request')} Request
 @typedef {import('@adonisjs/framework/src/Response')} Response
 @typedef {import('@adonisjs/framework/src/View')} View
 */


/**
 * Resourceful controller for interacting with assets
 */
class FileController {

  _processMultipart(multipart) {
    return new Promise(async resolve => {
      multipart.file('file', {}, async file => {
        resolve(file)
      })
      await multipart.process()
    })
  }

  _getFileName(file) {
    const clientName = file.clientName
      ? file.clientName.substring(0, file.clientName.indexOf('.'))
      : 'no-name'

    const name = sanitizeFileName(clientName)

    return `${new Date().getTime()}-${name}.${file.subtype}`
  }

  _appendSuffix(fileName, suffix) {
    const name = fileName.substring(0, fileName.indexOf('.'))
    const extension = fileName.substring(fileName.indexOf('.'))
    return `${name}${suffix}${extension}`
  }


  _createSlide(fileName, pictureStream) {
    const thumbnailName = this._appendSuffix(fileName, '-slide')
    const transform = sharp().resize({ height: 250 }).withMetadata()
    Drive.put(thumbnailName, pictureStream.pipe(transform))
  }

  _createThumbnail(fileName, pictureStream) {
    const thumbnailName = this._appendSuffix(fileName, '-thumbnail')
    const transform = sharp().resize({ width: 150, height: 150 }).withMetadata()
    Drive.put(thumbnailName, pictureStream.pipe(transform))
  }

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
    const picture = await this._processMultipart(request.multipart)
    const fileName = this._getFileName(picture)
    await Drive.put(fileName, picture.stream)
    const pictureStream = await Drive.getStream(fileName)

    if (type === 'thumbnail') this._createThumbnail(fileName, pictureStream)
    if (type === 'slide') this._createSlide(fileName, pictureStream)


    return response.created({
      url: `/uploads/${fileName}`,
    })
  }

  /**
   * Delete a upload with id.
   * DELETE assets/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ asset, response }) {
    const fileName = basename(asset.url)
    await Drive.delete(fileName)
    await asset.delete()
    return response.deleted('Upload was deleted successfully!')
  }
}

module.exports = FileController
