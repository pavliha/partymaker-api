'use strcit'

class Group {

  static create(user) {
    return user.admin
  }

  static edit(user, place) {
    return user.admin || user.id === place.admin_id
  }

  static delete(user, place) {
    return user.admin || user.id === place.admin_id
  }
}

module.exports = Group
