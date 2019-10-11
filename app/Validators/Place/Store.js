const Place = use('App/Models/Place')

module.exports = class Store {

  async authorize() {
    const { auth, response } = this.ctx
    if (auth.user.cannot('create', Place)) {
      return response.forbidden()
    }

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
      price: 'string',
      age: 'number',
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
