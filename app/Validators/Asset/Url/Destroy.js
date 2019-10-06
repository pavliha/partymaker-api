const Asset = use('App/Models/Asset')

module.exports = class Destroy {

  async authorize() {
    this.ctx.asset = await Asset.findByOrFail({ url: this.ctx.params.url })
    const { auth, response, place } = this.ctx
    const can = auth.user.can('delete', place)
    if (!can) return response.forbidden()
    return true
  }

}
