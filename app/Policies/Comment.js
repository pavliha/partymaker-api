'use strcit'

class Comment {

  static create(user) {
    return user.is_superadmin || user.is_active
  }

  static edit(user, comment) {
    return user.is_superadmin || user.id === comment.user_id
  }

  static delete(user, comment) {
    return user.is_superadmin || user.id === comment.user_id
  }
}

module.exports = Comment
