const { Command } = require('@adonisjs/ace')
const util = require('util')
const fs = require('fs')
const readdir = util.promisify(fs.readdir)
const Helpers = use('Helpers')
const ImageProcessor = use('ImageProcessor')

class PicturesResizeCommand extends Command {

  static get signature() {
    return 'pictures:resize'
  }

  static get description() {
    return 'Create thumbnails and slides for uploaded pictures'
  }

  _findOriginals(fileNames) {
    return fileNames.filter(fileName => {
      const isThumbnail = fileName.includes('thumbnail.')
      const isSlide = fileName.includes('slide.')
      return !(isThumbnail || isSlide)
    })
  }

  _displayCreatedCount(created, label) {
    const countCreated = created.filter(isCreated => isCreated)
    return countCreated < 1
      ? this.warn(`All pictures have ${label}`)
      : this.success(`Created ${countCreated.length} ${label}`)
  }

  async _createThumbnails(fileNames) {
    const promises = fileNames.map(fileName => ImageProcessor.createThumbnail(fileName))
    this.info('Creating thumbnails...')
    const created = await Promise.all(promises)
    return this._displayCreatedCount(created, 'thumbnails')
  }

  async _createSlides(fileNames) {
    const promises = fileNames.map(fileName => ImageProcessor.createSlide(fileName))
    this.info('Creating slides...')
    const created = await Promise.all(promises)
    return this._displayCreatedCount(created, 'slides')
  }

  async _resize(fileNames) {
    const originals = this._findOriginals(fileNames)
    await this._createThumbnails(originals)
    await this._createSlides(originals)
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

module.exports = PicturesResizeCommand
