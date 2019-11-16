const { ServiceProvider } = require('@adonisjs/fold')
const epocthaAPI = require('epochta-client')


class Sms {

  constructor(Config) {
    this.Config = Config
    this.client = epocthaAPI({
      publicKey: Config.get('sms.publicKey'),
      privateKey: Config.get('sms.privateKey'),
    })
  }

  send({ sender = this.Config.get('sms.sender'), text, phone }) {
    // this.client.sendSMS({ sender, text, phone })
    // eslint-disable-next-line no-console
    console.log({ sender, text, phone })
    return this
  }

}

class SmsProvider extends ServiceProvider {

  register() {
    this.app.singleton('App/Providers/Sms', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new Sms(Config)
    })
  }

  boot() {

  }
}

module.exports = SmsProvider

