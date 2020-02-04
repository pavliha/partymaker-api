const { Command } = require('@adonisjs/ace')
const Image = use('Image')
const Place = use('App/Models/Place')
const { basename } = require('path')


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
    const promises = fileNames.map(fileName => Image.createThumbnail(fileName))
    this.info('Creating thumbnails...')
    const created = await Promise.all(promises)
    return this._displayCreatedCount(created, 'thumbnails')
  }

  async _createSlides(fileNames) {
    const promises = fileNames.map(fileName => Image.createSlide(fileName))
    this.info('Creating slides...')
    const created = await Promise.all(promises)
    return this._displayCreatedCount(created, 'slides')
  }

  async _resize(fileNames) {
    const originals = this._findOriginals(fileNames)
    await this._createThumbnails(originals)
    await this._createSlides(originals)
  }

  async handle(args, options) {
    this.info('Reading files from uploads folder')
    const places = await Place.all()
    const pictures = places.toJSON()
      .map(p => p.picture_url)
      .filter(url => !!url)
      .map(url => basename(url))
    await this._resize(pictures)
    return this.success(`Processed ${pictures.length} original pictures`)
  }
}

module.exports = PicturesResizeCommand
