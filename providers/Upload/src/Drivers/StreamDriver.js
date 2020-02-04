const Driver = require('./Driver')

class StreamDriver extends Driver {

  create(fileName) {
    this.fileName = fileName
    this.fileStream = this.drive.getStream(this.fileName)
    return this
  }

}

module.exports = StreamDriver
