const sharp = require('sharp')
const { basename, extname } = require('path')

class Picture {

  constructor(upload) {
    this.upload = upload
  }

  exists() {
    return this.upload.exists()
  }

  appendSuffix(suffix) {
    const fileName = this.upload.name
    const extension = extname(fileName)
    const name = basename(fileName).replace(extension, '')
    this.upload.rename(`${name}${suffix}${extension}`)
    return this
  }

  resize(dimensions) {
    const { stream } = this.upload
    const transform = sharp().resize(dimensions).withMetadata()
    this.upload.stream = stream.pipe(transform)
    return this
  }

  async save() {
    this.upload_url = await this.upload.save()
    return this.upload_url
  }

  get url() {
    return this.upload_url
  }

}

module.exports = Picture
