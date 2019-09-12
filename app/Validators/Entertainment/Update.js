const Entertainment = use('App/Models/Entertainment')

module.exports = class Update {

  async authorize() {
    const { auth, response, params } = this.ctx
    this.ctx.entertainment = await Entertainment.findOrFail(params.id)
    if (!auth.user.is_superadmin) return response.forbidden()
    return true
  }

  get rules() {
    return {
      title: 'string',
    }
  }

  get validateAll() {
    return true
  }
}
