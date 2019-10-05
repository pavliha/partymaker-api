const Photo = use('App/Models/Photo')

module.exports = class Destroy {

  async authorize() {
    this.ctx.photo = await Photo.findOrFail(this.ctx.params.id)
    const { auth, response } = this.ctx
    const can = auth.user.is_superadmin
    if (!can) return response.forbidden()
    return true
  }

}
