class AuthAccountController {

  /**
   * update current user
   * GET /auth/user/account
   */
  async show({ auth }) {
    return auth.user.account().fetch()
  }

  /**
   * update current user
   * PUT /auth/user/account
   */
  async update({ request, auth }) {
    const fields = request.all()
    const account = auth.user.account()
    const exists = await account.fetch()
    const set = exists ? account.update : account.create
    await set(fields)
    return account.fetch()
  }
}

module.exports = AuthAccountController
