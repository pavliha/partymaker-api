const Comment = use('App/Models/Comment')

module.exports = class Store {

  async authorize() {
    const { auth, response } = this.ctx
    if (auth.user.cannot('create', Comment)) {
      return response.forbidden()
    }

    return true
  }

  get rules() {
    return {
      text: 'required|string',
    }
  }

  get validateAll() {
    return true
  }
}
