module.exports = class Store {


  get rules() {
    return {
      url: 'required|string',
    }
  }

  get validateAll() {
    return true
  }
}
