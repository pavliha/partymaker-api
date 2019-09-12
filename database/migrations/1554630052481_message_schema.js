'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up() {
    this.create('messages', (table) => {
      table.increments()
      table.text('text').notNullable()
      table.string('token').nullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('room_id').notNullable().unsigned().references('id').inTable('rooms').onDelete('CASCADE')
      table.integer('asset_id').unsigned().references('id').inTable('assets').onDelete('CASCADE')
      table.integer('place_id').unsigned().references('id').inTable('places').onDelete('CASCADE')
      table.boolean('is_read').defaultTo(false)
      table.date('date').nullable()
      table.string('time').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('messages')
  }
}

module.exports = MessageSchema