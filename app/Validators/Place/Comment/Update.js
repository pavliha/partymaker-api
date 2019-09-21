const Comment = use('App/Models/Comment')

module.exports = class Update {

  async authorize() {
    const { auth, response, params } = this.ctx
    this.ctx.comment = await Comment.findOrFail(params.id)
    const isEditable = auth.user.can('edit', this.ctx.comment)
    if (!isEditable) return response.forbidden()
    return true
  }

  get rules() {
    return {
      text: 'required|string',
    }
  }

  get validateAll() {
    return true
  }
}
