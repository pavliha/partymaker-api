/* eslint-disable radix,object-shorthand */
const Event = use('App/Models/Event')
const EventRepository = use('App/Repositories/Event')
const autoBind = require('auto-bind')

class EventController {

  constructor() {
    this.event = new EventRepository()
    autoBind(this)
  }

  /**
   * Show a list of all events.
   * GET events
   */
  async index({ request }) {
    const { page, limit, ...params } = request.all()

    return this.event.paginate({
      page: page || 1,
      limit: limit || 10,
      params,
    })
  }

  /**
   * Create/save a new event.
   * POST events
   */
  async store({ request, auth, response }) {
    const req = request.all()
    const data = { admin: auth.user, ...req }

    const event = await this.event.create(data)

    return response.created(event)
  }

  /**
   * Display a single event.
   * GET events/:id
   */
  show({ request, auth, params }) {
    return Event
      .query()
      .with('admin')
      .with('address')
      .with('place')
      .where('id', params.id)
      .first()
  }

  /**
   * Update event details.
   * PUT or PATCH events/:id
   */
  async update({ request, auth, response, params }) {
    const req = request.all()
    const event = await Event.find(params.id)

    if (!event) return response.notFound()

    if (auth.user.cannot('edit', event)) return response.forbidden()

    await this.event.edit(event, req)

    return event
  }

  /**
   * Delete a event with id.
   * DELETE events/:id
   */
  async destroy({ params, response, auth }) {
    const event = await Event.find(params.id)

    if (!event) return response.notFound()
    if (auth.user.cannot('delete', event)) return response.forbidden()

    event.delete()

    return event
  }
}

module.exports = EventController

