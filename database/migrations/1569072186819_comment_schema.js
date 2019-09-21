'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up() {
    this.create('comments', (table) => {
      table.increments()
      table.integer('place_id').unsigned().references('id').inTable('places')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('text')
      table.timestamps()
    })
  }

  down() {
    this.drop('comments')
  }
}

module.exports = CommentSchema
