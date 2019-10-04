'use strcit'

class Photo {

  static create(user) {
    return user.is_superadmin || user.is_active
  }

  static edit(user, photo) {
    return user.is_superadmin || user.id === photo.user_id
  }

  static delete(user, photo) {
    return user.is_superadmin || user.id === photo.user_id
  }
}

module.exports = Photo
