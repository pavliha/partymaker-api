'use strict'

const { basename } = require('path')
const fs = require('fs')
const { generateNameFromUrl } = require('../../../../../utils')
const axios = require('axios')
const Helpers = use('Helpers')
const Asset = use('App/Models/Asset')
const Drive = use('Drive')
const unlink = Helpers.promisify(fs.unlink)

/**
 * Resourceful controller for interacting with assets
 */
class UrlController {
  /**
   * Show a list of all assets.
   * GET assets/url
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async index({ request, auth }) {
    const { page, limit } = request.all()
    return Asset.query()
      .where({ admin_id: auth.user.id })
      .paginate({ page, limit })
  }

  /**
   * Create/save a new asset.
   * POST assets/url
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const { url, title } = request.all()
    const fileName = generateNameFromUrl(url)
    const file = await axios.get(url, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(file.data, 'base64')
    await Drive.put(fileName, buffer)
    const asset = await Asset.create({
      admin_id: auth.user.id,
      title,
      url: `/uploads/${fileName}`
    })

    return response.created(asset)
  }

  /**
   * Display a single asset.
   * GET assets/url/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    return Asset.findByOrFail({ url: params.url })
  }

  /**
   * Delete a asset with id.
   * DELETE assets/url/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ response, asset }) {
    await unlink(Helpers.publicPath(`uploads/${basename(asset.url)}`))
    await asset.delete()
    return response.deleted('Asset was deleted successfully!')
  }
}

module.exports = UrlController
