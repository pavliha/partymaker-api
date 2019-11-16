const { Command } = require('@adonisjs/ace')
const sharp = require('sharp')
const util = require('util')
const fs = require('fs')
const readdir = util.promisify(fs.readdir)
const Helpers = use('Helpers')
const Drive = use('Drive')

class PicturesCommand extends Command {
  static get signature() {
    return 'pictures:resize'
  }

  static get description() {
    return 'Create thumbnails and slides for uploaded pictures'
  }

  _appendSuffix(fileName, suffix) {
    const name = fileName.substring(0, fileName.indexOf('.'))
    const extension = fileName.substring(fileName.indexOf('.'))
    return `${name}${suffix}${extension}`
  }

  _createSlide(fileName, pictureStream) {
    const thumbnailName = this._appendSuffix(fileName, '-slide')
    const transform = sharp().resize({ height: 250 }).withMetadata()
    return Drive.put(thumbnailName, pictureStream.pipe(transform))
  }

  _createThumbnail(fileName, pictureStream) {
    const thumbnailName = this._appendSuffix(fileName, '-thumbnail')
    const transform = sharp().resize({ width: 150, height: 150 }).withMetadata()
    return Drive.put(thumbnailName, pictureStream.pipe(transform))
  }

  _findWithoutThumbnail(fileNames) {
    return fileNames.filter(fileName => !fileName.includes('thumbnail.'))
  }

  _findWithoutSlide(fileNames) {
    return fileNames.filter(fileName => !fileName.includes('slide.'))
  }

  _createThumbnails(fileNames) {
    return fileNames.map(async fileName =>
      this._createThumbnail(fileName, await Drive.getStream(fileName)))
  }

  _createSlides(fileNames) {
    return fileNames.map(async fileName =>
      this._createSlide(fileName, await Drive.getStream(fileName)))
  }

  async _resize(fileNames) {
    const withoutThumbnails = this._findWithoutThumbnail(fileNames)
    if (withoutThumbnails.length === 0) this.warn('All pictures have thumbnails')
    await this._createThumbnails(withoutThumbnails)
    this.success(`Created ${withoutThumbnails.length} thumbnails`)
    const withoutSlides = this._findWithoutSlide(fileNames)
    if (withoutSlides.length === 0) this.warn('All pictures have slides')
    await this._createSlides(withoutSlides)
    this.success(`Created ${withoutSlides.length} slides`)
  }

  async handle(args, options) {
    this.info('Reading files from uploads folder')
    const uploadsPath = Helpers.publicPath('uploads/')
    const fileNames = await readdir(uploadsPath)
    this.info('Creating thumbnails...')
    await this._resize(fileNames)
    return this.success(`Processed ${fileNames.length} original pictures`)
  }
}

module.exports = PicturesCommand
