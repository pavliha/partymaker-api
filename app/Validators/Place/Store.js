const Place = use('App/Models/Place')
const Validator = use('App/Validators/Validator')

module.exports = class Store extends Validator {

  async authorize() {
    const { auth, response } = this.ctx
    if (auth.user.cannot('create', Place)) {
      return response.forbidden()
    }

    return true
  }

  get sanitizationRules() {
    return {
      entertainment_id: 'to_int',
      'requirements.min_order_amount': 'to_int',
      'requirements.min_age': 'to_int',
      'requirements.max_age': 'to_int',
      'requirements.players_min': 'to_int',
      'requirements.players_max': 'to_int',
    }
  }

  get rules() {
    return {
      title: 'required|string',
      picture_url: 'string',
      price: 'string',
      working_hours: 'string',
      entertainment_id: 'required|integer',
      photos: 'array',
      additional_services: 'array',
      description: 'string',
      'requirements.min_order_amount': 'integer',
      'requirements.min_age': 'integer',
      'requirements.max_age': 'integer',
      'requirements.players_min': 'integer',
      'requirements.players_max': 'integer',
      'contacts.website_url': 'url',
      'contacts.address': 'string',
      'contacts.directions': 'string',
      'contacts.instagram_url': 'url',
      'contacts.email': 'email',
      'contacts.map_url': 'url',
      'contacts.phone': 'string',
    }
  }
}
