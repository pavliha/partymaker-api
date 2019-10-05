'use strict'

const { basename } = require('path')
const fs = require('fs')
const Env = use('Env')
const Helpers = use('Helpers')
const Asset = use('App/Models/Asset')
const unlink = Helpers.promisify(fs.unlink)
const { processUrl, processFile } = require('../../../utils')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with assets
 */
class AssetController {
  /**
   * Show a list of all assets.
   * GET assets
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
   * POST assets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const url = request.input('url')
    const fileName = url ? await processUrl(url) : await processFile(request)

    const asset = await Asset.create({
      admin_id: auth.user.id,
      title: request.input('title'),
      url: `${Env.get('APP_URL')}/uploads/${fileName}`
    })

    return response.created(asset)
  }

  /**
   * Display a single asset.
   * GET assets/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    return Asset.find(params.id)
  }

  /**
   * Delete a asset with id.
   * DELETE assets/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, response }) {
    const asset = await Asset.findOrFail(params.id)
    if (auth.user.cannot('delete', asset)) return response.forbidden()
    await unlink(Helpers.publicPath(`uploads/${basename(asset.url)}`))
    await asset.delete()
    return response.deleted('Asset was deleted successfully!')
  }
}

module.exports = AssetController
