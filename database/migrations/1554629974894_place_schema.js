'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaceSchema extends Schema {
  up() {
    this.create('places', (table) => {
      table.increments()
      table.string('title')
      table.string('picture_url')
      table.string('working_hours')
      table.string('price')
      table.string('website_url')
      table.string('address')
      table.string('instragram_url')
      table.string('email')
      table.text('map_url')
      table.string('phone')
      table.integer('admin_id').unsigned().references('id').inTable('users')
      table.integer('entertainment_id').unsigned().references('id').inTable('entertainments')
      table.boolean('is_active').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('places')
  }
}

module.exports = PlaceSchema
