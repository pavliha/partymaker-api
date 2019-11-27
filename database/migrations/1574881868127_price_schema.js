'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PriceSchema extends Schema {
  up() {
    this.create('prices', (table) => {
      table.increments()
      table.string('title')
      table.double('cost')
      table.integer('place_id').unsigned().references('id').inTable('places').onDelete('CASCADE')
      table.timestamps()
      table.unique(['title', 'place_id'])
    })
  }

  down() {
    this.drop('prices')
  }
}

module.exports = PriceSchema
