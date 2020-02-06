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

  findOriginals(fileNames) {
    return fileNames.filter(fileName => {
      const isThumbnail = fileName.includes('thumbnail.')
      const isSlide = fileName.includes('slide.')
      return !(isThumbnail || isSlide)
    })
  }

  show(created, label) {
    const countCreated = created.filter(isCreated => isCreated)
    return countCreated < 1
      ? this.warn(`All pictures have ${label}`)
      : this.success(`Created ${countCreated.length} ${label}`)
  }

  async create(fileNames, type) {
    const promises = fileNames.map(async fileName => {
      try {
        return await Image.resize(fileName, type)
      } catch (e) {
        console.warn({ fileName })
        return null
      }
    })
    this.info(`Creating ${type}s...`)
    const created = await Promise.all(promises)
    return this.show(created, `${type}s`)
  }

  async resize(fileNames) {
    const originals = this.findOriginals(fileNames)
    await this.create(originals, 'thumbnail')
    await this.create(originals, 'slide')
  }

  async select() {
    const places = await Place.all()
    return places.toJSON()
      .map(p => p.picture_url)
      .filter(url => !!url)
      .map(url => basename(url))
  }

  async handle(args, options) {
    try {

      this.info('Reading files from uploads folder')
      const pictures = await this.select()
      await this.resize(pictures)
      return this.success(`Processed ${pictures.length} original pictures`)
    } catch (e) {
      console.warn('catched')
    }
  }
}

module.exports = PicturesResizeCommand
