const sanitizeFileName = require('sanitize-filename')
const Driver = require('./Driver')

class MultipartDriver extends Driver {

  async create(multipart) {
    const file = await this._process(multipart)
    this.fileName = this._generateName(file)
    this.fileStream = file.stream
    return this
  }

  _process(multipart) {
    return new Promise(async resolve => {
      multipart.file('file', {}, async file => {
        resolve(file)
      })
      await multipart.process()
    })
  }

  _generateName(file) {
    const clientName = file.clientName
      ? file.clientName.substring(0, file.clientName.indexOf('.'))
      : 'no-name'
    const name = sanitizeFileName(clientName)
    return `${new Date().getTime()}-${name}.${file.subtype}`.replace(/ /g, '_')
  }

}

module.exports = MultipartDriver
