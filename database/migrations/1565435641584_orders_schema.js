'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {

  up() {
    this.create('orders', (table) => {
      table.increments()
      table.integer('group_id').unsigned().references('id').inTable('groups')
      table.date('date')
      table.string('time')
      table.integer('members')
      table.string('phone')
      table.timestamps()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
