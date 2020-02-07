const Picture = require('./Picture')
const Slide = require('./Slide')
const Thumbnail = require('./Thumbnail')


class Image {

  types = {
    slide: Slide,
    thumbnail: Thumbnail,
  }

  constructor(Upload) {
    this.upload = Upload
  }

  async create(upload) {
    const picture = new Picture(upload)
    await picture.save()
    this.picture_url = picture.url
    return this
  }

  async resize(fileName, type) {
    const ResizedPicture = this.types[type]
    if (!ResizedPicture) return this
    const upload = await this.upload.get(fileName)
    const picture = new ResizedPicture(upload)
    await picture.save()
    return this
  }

  get url() {
    return this.picture_url
  }

}

module.exports = Image
