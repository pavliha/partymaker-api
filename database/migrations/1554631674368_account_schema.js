'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountSchema extends Schema {
  up() {
    this.create('accounts', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('instagram', 60).nullable()
      table.string('facebook', 60).nullable()
      table.string('telegram', 60).nullable()
      table.string('skype', 60).nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
