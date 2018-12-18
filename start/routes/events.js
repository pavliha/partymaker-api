const Route = use('Route')
const SUD = new Map([[['store', 'update', 'destroy'], ['auth']]])

/**
 *
 * Event routes
 *`
 * */

Route.group(() => {
  Route.resource('events', 'EventController')
    .validator([['events.store', 'Event/Store'], ['events.update', 'Event/Update']])
    .middleware(SUD)
    .apiOnly()

  Route.resource('events.guests', 'EventGuestsController')
    .middleware('auth')
    .apiOnly()
    .except(['update'])

  Route.resource('events.details', 'EventDetailsController')
    .middleware('auth')
    .apiOnly()
    .except(['update'])

  Route.resource('events.place', 'EventPlaceController')
    .middleware('auth')
    .apiOnly()
    .except(['update', 'show'])

  Route.resource('events.invites', 'EventInvitesController')
    .middleware('auth')
    .only(['index', 'store'])

}).namespace('Event')

