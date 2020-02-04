const { ServiceProvider } = require('@adonisjs/fold')
const Image = require('../src/Image')

class ImageProvider extends ServiceProvider {

  register() {
    this.app.singleton('App/Providers/Image', () => {
      const Upload = this.app.use('App/Providers/Upload')
      return new Image(Upload)
    })
  }

  boot() {

  }
}

module.exports = ImageProvider

