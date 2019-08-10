const isEmpty = require('lodash/isEmpty')

const Model = use('Model')

class Group extends Model {
  static get hidden() {
    return ['address_id', 'user_id', 'place_id']
  }

  static get policy() {
    return 'App/Policies/Group'
  }

  place() {
    return this.belongsTo('App/Models/Place')
  }

  async isMember(user_id) {
    const member = await this.users()
      .pivotQuery()
      .where({ user_id })
      .first()

    return !isEmpty(member)
  }

}

module.exports = Group
