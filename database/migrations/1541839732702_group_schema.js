/* eslint-disable newline-per-chained-call */
const Schema = use('Schema')

class GroupSchema extends Schema {
  up() {
    this.create('groups', (table) => {
      table.increments()
      table.string('title')
      table.integer('place_id').unsigned().references('id').inTable('places')
      table.integer('order_id').unsigned().references('id').inTable('orders')
      table.string('invite_url')
      table.dateTime('date').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('groups')
  }
}

module.exports = GroupSchema
