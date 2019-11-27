'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdditionalServiceSchema extends Schema {
  up() {
    this.create('additional_services', (table) => {
      table.increments()
      table.string('title')
      table.double('price')
      table.string('description')
      table.integer('place_id').unsigned().references('id').inTable('places').onDelete('CASCADE')
      table.unique(['title', 'place_id'])
      table.timestamps()
    })
  }

  down() {
    this.drop('additional_services')
  }
}

module.exports = AdditionalServiceSchema
