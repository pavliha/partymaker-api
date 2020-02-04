const { basename } = require('path')
const Model = use('Model')
const Drive = use('Drive')

class Photo extends Model {

  user() {
    return this.belongsTo('App/Models/User')
  }

  place() {
    return this.belongsTo('App/Models/Place')
  }

  setUrl(url) {
    return basename(url)
  }

  getUrl(filename) {
    return Drive.getUrl(filename)
  }

}

module.exports = Photo
