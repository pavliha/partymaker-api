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
      table.integer('admin_id').unsigned().references('id').inTable('users').onDelete('SET NULL')
      table.integer('entertainment_id').unsigned().references('id').inTable('entertainments').onDelete('SET NULL')
      table.boolean('is_active').defaultTo(true)
      table.text('description')
      table.timestamps()
    })
  }

  down() {
    this.drop('places')
  }
}

module.exports = PlaceSchema
