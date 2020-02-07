const isUrl = require('is-url')
const UrlUpload = require('./UrlUpload')
const MultipartUpload = require('./MultipartUpload')
const StreamUpload = require('./StreamUpload')

class Upload {

  constructor(drive) {
    this.drive = drive
  }

  create(data) {
    const SelectedUpload = isUrl(data) ? UrlUpload : MultipartUpload
    const upload = new SelectedUpload(this.drive)
    return upload.create(data)
  }

  get(fileName) {
    const upload = new StreamUpload(this.drive)
    return upload.create(fileName)
  }
}

module.exports = Upload
