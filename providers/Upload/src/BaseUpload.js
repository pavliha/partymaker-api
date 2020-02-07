/* eslint-disable */

class BaseUpload {

  fileName = null
  fileStream = null
  fileUrl = null

  constructor(drive) {
    this.drive = drive
  }

  exists() {
    return this.drive.exists(this.fileName)
  }

  rename(name) {
    this.fileName = name
  }

  async save() {
    const stream = this.fileStream
    const name = this.fileName
    const headers = stream.headers
    const options = {
      ContentType: headers ? headers['content-type'] : null,
      ACL: 'public-read'
    }
    this.fileUrl = await this.drive.put(name, stream, options)

    return this.fileUrl
  }

  get name() {
    return this.fileName
  }

  get stream() {
    return this.fileStream
  }

  get url() {
    return this.fileUrl
  }

  set name(name) {
    this.fileName = name
  }

  set stream(newStream) {
    this.fileStream = newStream
  }

}

module.exports = BaseUpload
