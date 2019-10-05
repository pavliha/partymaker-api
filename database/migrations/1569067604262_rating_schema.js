'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatingSchema extends Schema {
  up() {
    this.create('ratings', (table) => {
      table.increments()
      table.integer('place_id').unsigned().references('id').inTable('places').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.unique(['place_id', 'user_id'])
      table.integer('rating')
      table.timestamps()
    })
  }

  down() {
    this.drop('ratings')
  }
}

module.exports = RatingSchema
