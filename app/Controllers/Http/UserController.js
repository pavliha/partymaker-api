const User = use('App/Models/User')
const UserRepository = use('App/Repositories/User')

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  constructor() {
    this.index = this.index.bind(this)
  }

  /**
   * Show a list of all users.
   * GET users
   */

  async index({ request }) {
    const { page, limit } = request.all()
    return User.query().paginate({ page: page || 1, limit: limit || 10 })
  }
}

module.exports = UserController
