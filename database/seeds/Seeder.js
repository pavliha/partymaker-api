/*
eslint-disable import/no-unresolved,
import/no-extraneous-dependencies,
import/newline-after-import,
function-paren-newline,
no-console,
*/

const promiseSerial = require('promise-serial')
const USERS = require('./users')
const ENTERTAINMENTS = require('./entertainments')
const PLACES = require('./places')
const CONTACTS = require('./contacts')

const Factory = use('Factory')
const User = use('App/Models/User')
const Entertainment = use('App/Models/Entertainment')
const Place = use('App/Models/Place')
const Contact = use('App/Models/Contact')

function log(text) {
  console.log(text)
  return text
}

class Seeder {

  createEntertainments() {
    log('creating entertainments...')
    return promiseSerial(ENTERTAINMENTS.map(fields => () => Entertainment.create(fields)))
  }

  createPlaces() {
    log('creating places...')
    return Promise.all(PLACES.map(fields => Place.create(fields)))
  }

  addContacts() {
    log('creating places contacts...')
    return Promise.all(CONTACTS.map(fields => Contact.create(fields)))
  }

  async createUsers() {
    log('creating users...')
    const defaultUsers = await Promise.all(USERS.map(user => User.create(user)))
    const randomUsers = await Factory.model('App/Models/User').createMany(5)
    return [...defaultUsers, ...randomUsers]
  }


  async run() {
    await this.createUsers()
    await this.createEntertainments()
    await this.createPlaces()
    await this.addContacts()
    return true
  }
}

module.exports = Seeder
