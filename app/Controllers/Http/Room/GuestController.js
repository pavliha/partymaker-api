'use strict'

const Ws = use('Ws')
const Room = use('App/Models/Room')
const User = use('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */

/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with guests
 */
class GuestController {
  /**
   * Show a list of guests in the room.
   * GET guests
   *
   * @param {object} ctx
   */
  async index({ params }) {
    const { rooms_id } = params
    const room = await Room.findOrFail(rooms_id)
    return room.users().fetch()
  }

  /**
   * Delete a guest with id.
   * DELETE guests/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, response }) {
    const room = await Room.findOrFail(params.rooms_id)
    const guest = await User.findOrFail(params.id)
    if (!await room.contains(guest)) {
      return response.notFound('Guest not found!')
    }

    if (auth.user.cannot('removeGuest', room)) {
      return response.forbidden('Only member of the room can delete guest!')
    }

    await room.users().detach([guest.id])

    Ws.getChannel('room:*')
      .topic(`room:${room.id}`)
      .broadcast('guest:removed', { user_id: guest.id, room_id: room.id })

    room.notify(`${auth.user.name} удалил(а) пользователя ${guest.name} из компании`)

    return response.deleted('User kicked out from the room!')
  }
}

module.exports = GuestController