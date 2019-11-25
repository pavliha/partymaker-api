
module.exports = class Destroy {

  async authorize() {
    const { auth, response, place } = this.ctx
    const can = auth.user.can('delete', place)
    if (!can) return response.forbidden()
    return true
  }

}
