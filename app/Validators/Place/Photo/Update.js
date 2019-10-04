const Photo = use('App/Models/Photo')

module.exports = class Update {

  async authorize() {
    const { auth, response, params } = this.ctx
    this.ctx.photo = await Photo.findOrFail(params.id)
    const isEditable = auth.user.can('edit', this.ctx.photo)
    if (!isEditable) return response.forbidden()
    return true
  }

  get rules() {
    return {
      url: 'required|string',
    }
  }

  get validateAll() {
    return true
  }
}
