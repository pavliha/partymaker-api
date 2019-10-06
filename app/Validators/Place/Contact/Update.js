const Contact = use('App/Models/Contact')

module.exports = class Update {

  async authorize() {
    const { auth, response, params } = this.ctx
    this.ctx.contact = await Contact.findOrFail(params.id)
    const can = auth.user.is_superadmin
    if (!can) return response.forbidden()
    return true
  }

  get rules() {
    return {}
  }

  get validateAll() {
    return true
  }
}
