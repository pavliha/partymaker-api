const Contact = use('App/Models/Contact')

module.exports = class Destroy {

  async authorize() {
    this.ctx.contact = await Contact.findOrFail(this.ctx.params.id)
    const { auth, response } = this.ctx
    const can = auth.user.can('delete', this.ctx.contact)
    if (!can) return response.forbidden()
    return true
  }

}
