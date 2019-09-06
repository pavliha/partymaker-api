
module.exports = class Store {

  async authorize() {
    return true
  }

  get rules() {
    return {
      title: 'string',
      date: 'date',
      place_id: 'exists:places,id'
    }
  }

  get validateAll() {
    return true
  }
}
