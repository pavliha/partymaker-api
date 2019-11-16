const { Command } = require('@adonisjs/ace')
const util = require('util')
const fs = require('fs')
const readdir = util.promisify(fs.readdir)
const Helpers = use('Helpers')
const ImageProcessor = use('ImageProcessor')

class PicturesCommand extends Command {

  static get signature() {
    return 'pictures:resize'
  }

  static get description() {
    return 'Create thumbnails and slides for uploaded pictures'
  }

  _findWithoutThumbnail(fileNames) {
    return fileNames.filter(fileName => !fileName.includes('thumbnail.'))
  }

  _findWithoutSlide(fileNames) {
    if (fileNames.length === 0) this.warn('All pictures have thumbnails')
    return fileNames.filter(fileName => !fileName.includes('slide.'))
  }

  async _createThumbnails(fileNames) {
    if (fileNames.length === 0) this.warn('All pictures have thumbnails')
    const promises = fileNames.map(fileName => ImageProcessor.createThumbnail(fileName))
    this.info('Creating thumbnails...')
    const thumbnails = await Promise.all(promises)
    this.success(`Created ${fileNames.length} thumbnails`)
    return thumbnails
  }

  async _createSlides(fileNames) {
    if (fileNames.length === 0) this.warn('All pictures have slides')
    const promises = fileNames.map(fileName => ImageProcessor.createSlide(fileName))
    this.info('Creating slides...')
    const thumbnails = await Promise.all(promises)
    this.success(`Created ${fileNames.length} slides`)
    return thumbnails
  }

  async _resize(fileNames) {
    const withoutThumbnails = this._findWithoutThumbnail(fileNames)
    const withoutSlides = this._findWithoutSlide(fileNames)
    await this._createThumbnails(withoutThumbnails)
    await this._createSlides(withoutSlides)
  }

  _findPictures(fileNames) {
    return fileNames.filter(fileName => fileName.toLowerCase().match(/.(jpg|jpeg|png)$/i))
  }

  async handle(args, options) {
    this.info('Reading files from uploads folder')
    const uploadsPath = Helpers.publicPath('uploads/')
    const fileNames = await readdir(uploadsPath)
    await this._resize(this._findPictures(fileNames))
    return this.success(`Processed ${fileNames.length} original pictures`)
  }
}

module.exports = PicturesCommand
