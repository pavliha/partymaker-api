const { ServiceProvider } = require('@adonisjs/fold')
const sharp = require('sharp')
const utils = require('../utils')


class ImageProcessor {

  constructor(Drive) {
    this.Drive = Drive
  }

  async createSlide(fileName) {
    const stream = await this.Drive.getStream(fileName)
    const name = utils.appendFileNameSuffix(fileName, '-slide')
    if (await this.Drive.exists(name)) return false
    const transform = sharp().resize({ height: 250 }).withMetadata()
    return this.Drive.put(name, stream.pipe(transform))
  }

  async createThumbnail(fileName) {
    const stream = await this.Drive.getStream(fileName)
    const name = utils.appendFileNameSuffix(fileName, '-thumbnail')
    if (await this.Drive.exists(name)) return false
    const transform = sharp().resize({ width: 150, height: 150 }).withMetadata()
    return this.Drive.put(name, stream.pipe(transform))
  }

}

class ImageProcessorProvider extends ServiceProvider {

  register() {
    this.app.singleton('App/Providers/ImageProcessor', () => {
      const Drive = this.app.use('Drive')
      return new ImageProcessor(Drive)
    })
  }

  boot() {

  }
}

module.exports = ImageProcessorProvider

