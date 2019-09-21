/** @typedef {import('@adonisjs/framework/src/Request')} Request */

/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with rooms
 */
class RoomController {
  /**
   * Show a list of all rooms.
   * GET /rooms
   *
   * @param {object} ctx
   */
  async index({ auth }) {
    return auth.user.rooms()
      .with('place')
      .withCount('users as guest_count')
      .fetch()
  }
}

module.exports = RoomController
