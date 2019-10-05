const Contact = use('App/Models/Contact')

module.exports = class Update {

  async authorize() {
    const { auth, response, params } = this.ctx
    this.ctx.contact = await Contact.findOrFail(params.id)
    const isEditable = auth.user.can('edit', this.ctx.contact)
    if (!isEditable) return response.forbidden()
    return true
  }

  get rules() {
    return {}
  }

  get validateAll() {
    return true
  }
}
