const { Command } = require('@adonisjs/ace')
const Image = use('Image')
const S3 = use('S3')

class ResizeCommand extends Command {

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

  async createFrom(fileNames, type) {
    const promises = fileNames.map(async fileName => Image.resize(fileName, type))
    this.info(`Creating ${type}s...`)
    const created = await Promise.all(promises)
    return this.show(created, `${type}s`)
  }

  async resize(fileNames) {
    const originals = this.findOriginals(fileNames)
    await this.createFrom(originals, 'thumbnail')
    await this.createFrom(originals, 'slide')
  }

  async handle(args, options) {
    this.info('Reading files from uploads folder')
    const pictures = await S3.list()
    await this.resize(pictures)
    this.success(`Processed ${pictures.length} original pictures`)
    process.exit()
  }
}

module.exports = ResizeCommand
