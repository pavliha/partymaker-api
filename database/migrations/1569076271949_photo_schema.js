'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhotoSchema extends Schema {
  up() {
    this.create('photos', (table) => {
      table.increments()
      table.string('url').nullable()
      table.integer('place_id').notNullable().unsigned().references('id').inTable('places').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('photos')
  }
}

module.exports = PhotoSchema
