'use strict'

const Room = use('App/Models/Room')
const User = use('App/Models/User')
const Ws = use('Ws')
const Message = use('App/Models/Message')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */

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
  async index({ response, params }) {
    const { rooms_id } = params

    const room = await Room.find(rooms_id)

    if (!room) {
      return response.notFound('Room not found!')
    }

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
    const room = await Room.find(params.rooms_id)
    const guest = await User.find(params.id)

    if (!room) {
      return response.notFound('Room not found!')
    }

    if (!await room.contains(guest)) {
      return response.notFound('Guest not found!')
    }

    if (auth.user.cannot('removeGuest', room)) {
      return response.forbidden('Only member of the room can delete guest!')
    }

    const chat = Ws.getChannel('room:*')
    const topic = chat.topic(`room:${room.id}`)

    if (topic) topic.broadcast('guest:left', auth.user)

    await Message.create({
      text: `${auth.user.name} удалил пользователя ${guest.name} из события`,
      room_id: room.id
    })

    await room.users().detach([guest.id])

    return response.deleted('User kicked out from the room!')
  }
}

module.exports = GuestController
