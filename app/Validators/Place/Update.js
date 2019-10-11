const Place = use('App/Models/Place')

module.exports = class Update {

  async authorize() {
    const { auth, response, params } = this.ctx
    this.ctx.place = await Place.findOrFail(params.id)
    const isEditable = auth.user.can('edit', this.ctx.place)
    if (!isEditable) return response.forbidden()
    return true
  }

  get sanitizationRules() {
    return {
      players_min: 'to_int',
      players_max: 'to_int',
      entertainment_id: 'to_int',
      age: 'to_int',
    }
  }

  get rules() {
    return {
      title: 'required|string',
      picture_url: 'string',
      age: 'number',
      price: 'string',
      players_min: 'number',
      players_max: 'number',
      working_hours: 'string',
      entertainment_id: 'required|number'
    }
  }

  get validateAll() {
    return true
  }
}
