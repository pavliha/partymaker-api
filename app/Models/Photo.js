const { basename } = require('path')
const Model = use('Model')
const Env = use('Env')

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
    return `${Env.get('APP_URL')}/uploads/${filename}`
  }

}

module.exports = Photo
