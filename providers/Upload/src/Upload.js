const isUrl = require('is-url')
const UrlDriver = require('./Drivers/UrlDriver')
const MultipartDriver = require('./Drivers/MultipartDriver')
const StreamDriver = require('./Drivers/StreamDriver')

class Upload {

  constructor(drive) {
    this.drive = drive
  }

  detectDriver(data) {
    if (isUrl(data)) return UrlDriver
    return MultipartDriver
  }

  create(data) {
    const Driver = isUrl(data) ? UrlDriver : MultipartDriver
    const driver = new Driver(this.drive)
    try {
      return driver.create(data)
    } catch (e) {
      console.warn(data)
      return null
    }
  }

  get(fileName) {
    const driver = new StreamDriver(this.drive)
    return driver.create(fileName)
  }
}

module.exports = Upload
