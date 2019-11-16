const { ServiceProvider } = require('@adonisjs/fold')
const sharp = require('sharp')
const utils = require('../utils')


class ImageProcessor {

  constructor(Drive) {
    this.Drive = Drive
  }

  async createSlide(fileName) {
    console.log('slide', fileName)
    const pictureStream = await this.Drive.getStream(fileName)
    const thumbnailName = utils.appendFileNameSuffix(fileName, '-slide')
    const transform = sharp().resize({ height: 250 }).withMetadata()
    return this.Drive.put(thumbnailName, pictureStream.pipe(transform))
  }

  async createThumbnail(fileName) {
    console.log('thumbnail', fileName)
    const pictureStream = await this.Drive.getStream(fileName)
    const thumbnailName = utils.appendFileNameSuffix(fileName, '-thumbnail')
    const transform = sharp().resize({ width: 150, height: 150 }).withMetadata()
    return this.Drive.put(thumbnailName, pictureStream.pipe(transform))
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

