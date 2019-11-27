const Place = use('App/Models/Place')
const Store = use('App/Validators/Place/Store')


module.exports = class Update extends Store {

  async authorize() {
    const { auth, response, params } = this.ctx
    this.ctx.place = await Place.findOrFail(params.id)
    const isEditable = auth.user.can('edit', this.ctx.place)
    if (!isEditable) return response.forbidden()
    return true
  }

}
