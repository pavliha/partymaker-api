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
      'requirements.age_min': 'to_int',
      'requirements.age_max': 'to_int',
      'requirements.players_min': 'to_int',
      'requirements.players_max': 'to_int',
      'additional_services.*.price': 'to_int',
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
      prices: 'array',
      about_prices: 'string',
      'requirements.min_order_amount': 'integer',
      'requirements.age_min': 'integer',
      'requirements.age_max': 'integer',
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
