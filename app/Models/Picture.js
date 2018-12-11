/* eslint-disable camelcase,no-underscore-dangle,no-return-await,consistent-return */
const Model = use('Model')
const Env = use('Env')
const PictureSerializer = require('./Serializers/PictureSerializer')

class Picture extends Model {

  static get Serializer() {
    return PictureSerializer
  }

  static get hidden() {
    return ['created_at', 'updated_at', 'id', 'pivot']
  }

  getUrl(url) {
    if (!url) return null
    if (url.includes('//')) return url
    return `${Env.get('APP_URL')}${url}`
  }
}

module.exports = Picture
