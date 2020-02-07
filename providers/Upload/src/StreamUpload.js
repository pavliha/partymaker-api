const BaseUpload = require('./BaseUpload')

class StreamUpload extends BaseUpload {

  create(fileName) {
    this.fileName = fileName
    this.fileStream = this.drive.getStream(this.fileName)
    return this
  }

}

module.exports = StreamUpload
