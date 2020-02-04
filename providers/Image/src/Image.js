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

  async makeAlso(type) {
    const ResizedPicture = this.types[type]
    if (!ResizedPicture) return
    const upload = await this.upload.create(this.url)
    const pictureType = new ResizedPicture(upload)
    await pictureType.save()
  }

  async create(upload, type) {
    const picture = new Picture(upload)
    await picture.save()
    this.picture_url = picture.url
    this.makeAlso(type)
    return this
  }

  get url() {
    return this.picture_url
  }

}

module.exports = Image
