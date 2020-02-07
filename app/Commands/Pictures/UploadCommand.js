const { Command } = require('@adonisjs/ace')
const { basename } = require('path')
const axios = require('axios')

const Place = use('App/Models/Place')
const Drive = use('Drive')

class UploadCommand extends Command {

  static get signature() {
    return 'pictures:upload'
  }

  static get description() {
    return 'Upload pictures to another storage service'
  }

  async handle(args, options) {
    this.info('Searching for pictures in database')
    const places = await Place.all()
    const pictures = places.toJSON()
      .map(p => p.picture_url)
      .filter(url => !!url)
      .map(url => basename(url))

    const results = pictures.map(async filename => {
      let picture
      try {
        const url = `https://api.partymaker.zp.ua/uploads/${filename}`
        picture = await axios.get(url, { responseType: 'arraybuffer' })
      } catch (e) {
        return e.message
      }

      if (picture) {
        return Drive.put(filename, Buffer.from(picture.data, 'base64'), {
          ContentType: picture.headers['content-type'],
          ACL: 'public-read'
        })
      }

      return null
    })

    await Promise.all(results)
    return this.success('Upload successful')
  }
}

module.exports = UploadCommand
