const Comment = use('App/Models/Comment')

module.exports = class Destroy {

  async authorize() {
    this.ctx.comment = await Comment.findOrFail(this.ctx.params.id)
    const { auth, response } = this.ctx
    const can = auth.user.can('delete', this.ctx.comment)
    if (!can) return response.forbidden()
    return true
  }

}
