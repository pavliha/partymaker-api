const { ServiceProvider } = require('@adonisjs/fold')
const Upload = require('../src/Upload')

class UploadProvider extends ServiceProvider {

  register() {
    this.app.singleton('App/Providers/Upload', () => {
      const Drive = this.app.use('Drive')
      return new Upload(Drive)
    })
  }

  boot() {

  }
}

module.exports = UploadProvider

