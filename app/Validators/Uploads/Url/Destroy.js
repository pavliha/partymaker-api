const Asset = use('App/Models/Asset')
const Env = use('Env')

module.exports = class Destroy {

  async authorize() {
    const fileName = this.ctx.params.url
    const url = `${Env.get('APP_URL')}/uploads/${fileName}`
    this.ctx.asset = await Asset.findByOrFail({ url })
    const { auth, response } = this.ctx
    const can = auth.user.can('delete', this.ctx.asset)
    if (!can) return response.forbidden()
    return true
  }

}
