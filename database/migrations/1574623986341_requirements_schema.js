'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequirementsSchema extends Schema {
  up() {
    this.create('requirements', (table) => {
      table.increments()
      table.integer('min_order_amount').unsigned()
      table.integer('age_min').unsigned()
      table.integer('age_max').unsigned()
      table.integer('players_min').unsigned()
      table.integer('players_max').unsigned()
      table.integer('place_id').unsigned().references('id').inTable('places').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('requirements')
  }
}

module.exports = RequirementsSchema
