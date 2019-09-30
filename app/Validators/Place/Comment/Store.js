module.exports = class Store {


  get rules() {
    return {
      text: 'required|string',
    }
  }

  get validateAll() {
    return true
  }
}
