class Store {

  async authorize() {
    const { auth, response, place } = this.ctx
    const can = auth.user.can('create', place)
    if (!can) return response.forbidden()
    return true
  }

  get rules() {
    return {
      file: 'file_size:2mb',
    }
  }
}

module.exports = Store
