/* eslint-disable newline-per-chained-call */
const Schema = use('Schema')

class EventSchema extends Schema {
  up() {
    this.create('events', (table) => {
      table.increments()
      table.string('title')
      table.integer('admin_id').unsigned().references('id').inTable('users').notNullable().onDelete('CASCADE')
      table.integer('place_id').unsigned().references('id').inTable('places').onDelete('CASCADE')
      table.string('description')
      table.dateTime('date')
      table.bool('private').default(false).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('events')
  }
}

module.exports = EventSchema
