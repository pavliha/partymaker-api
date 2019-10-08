'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
  up() {
    this.create('contacts', (table) => {
      table.increments()
      table.string('website_url')
      table.string('address')
      table.string('directions')
      table.string('instagram_url')
      table.string('email')
      table.text('map_url')
      table.string('phone')
      table.integer('place_id').unsigned().references('id').inTable('places').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
