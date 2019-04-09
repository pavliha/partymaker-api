const Mail = use('Mail')
const Env = use('Env')

class ActivationMail {

  _generateLink() {
    const IS_DEV = Env.get('NODE_ENV') !== 'production'
    return IS_DEV ? Env.get('FRONTEND_URL') : Env.get('APP_URL')
  }

  activate(token) {
    const base = this._generateLink(token)
    return `${base}/auth/activate/${token}`
  }

  forgotPassword(token) {
    const base = this._generateLink(token)
    return `${base}/auth/password/reset/${token}`
  }

  async send({ user, token }) {
    const data = {
      name: user.name,
      link: this.activate(token)
    }

    await Mail.send('emails.welcome', data, (message) => {
      message.to(user.email).from('activation@partymaker.zp.ua').subject('Please activate your account!')
    })
  }

  async sendForgotPassword({ email, token }) {
    const data = {
      email,
      link: this.forgotPassword(token)
    }

    await Mail.send('emails.forgotPassword', data, (message) => {
      message.to(email).from('activation@partymaker.zp.ua').subject('Please confirm your email!')
    })
  }
}

module.exports = new ActivationMail()
