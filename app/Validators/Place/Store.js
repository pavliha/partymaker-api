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
      working_hours: 'string',
      entertainment_id: 'required|number',
      photos: 'array',
      'requirements.min_order_amount': 'number',
      'requirements.min_age': 'number',
      'requirements.max_age': 'number',
      'requirements.players_min': 'number',
      'requirements.players_max': 'number',
      'contacts.website_url': 'url',
      'contacts.address': 'string',
      'contacts.directions': 'string',
      'contacts.instagram_url': 'url',
      'contacts.email': 'email',
      'contacts.map_url': 'url',
      'contacts.phone': 'string',
    }
  }

  get validateAll() {
    return true
  }
}
