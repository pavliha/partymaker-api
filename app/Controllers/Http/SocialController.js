'use strict'

const User = use('App/Models/User')

class SocialController {
  async redirect({ ally, params }) {
    await ally.driver(params.provider).redirect()
  }

  async callback({ ally, auth, params }) {
    try {
      const fbUser = await ally.driver(params.provider)
        .getUser()

      // user details to be saved
      const userDetails = {
        email: fbUser.getEmail(),
        token: fbUser.getAccessToken(),
        login_source: params.provider,
      }

      // search for existing user
      const whereClause = {
        email: fbUser.getEmail(),
      }

      const user = await User.findOrCreate(whereClause, userDetails)
      await auth.login(user)

      return 'Logged in'
    } catch (error) {
      return 'Unable to authenticate. Try again later'
    }
  }
}

module.exports = SocialController
