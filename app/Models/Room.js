'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {

  static get policy() {
    return 'App/Policies/Room'
  }

  async contains(user) {
    const result = await this.users().wherePivot('user_id', user.id).first()
    return !!result
  }

  users() {
    return this.belongsToMany('App/Models/User')
  }

  invite() {
    return this.hasOne('App/Models/Invite')
  }

  place() {
    return this.belongsTo('App/Models/Place')
  }
}

module.exports = Room
