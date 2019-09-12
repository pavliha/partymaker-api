const Place = use('App/Models/Place')

module.exports = class Update {

  async authorize() {
    const { auth, response, params } = this.ctx
    this.ctx.place = await Place.findOrFail(params.id)
    const isEditable = auth.user.can('edit', this.ctx.place)
    if (!isEditable) return response.forbidden()
    return true
  }

  get rules() {
    return {
      title: 'string',
      picture_url: 'string',
      price: 'string',
      phone: 'string',
      map_url: 'string',
      website_url: 'string',
      working_hours: 'string',
      is_active: 'boolean',
    }
  }

  get validateAll() {
    return true
  }
}
