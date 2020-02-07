const { ServiceProvider } = require('@adonisjs/fold')
const S3 = require('../src/S3')

class S3Provider extends ServiceProvider {

  register() {
    this.app.singleton('App/Providers/S3', () => {
      const Config = this.app.use('Config')
      return new S3(Config)
    })
  }

  boot() {

  }
}

module.exports = S3Provider

