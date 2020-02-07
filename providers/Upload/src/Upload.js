const isUrl = require('is-url')
const UrlDriver = require('./Drivers/UrlDriver')
const MultipartDriver = require('./Drivers/MultipartDriver')
const StreamDriver = require('./Drivers/StreamDriver')

class Upload {

  constructor(drive) {
    this.drive = drive
  }

  create(data) {
    const Driver = isUrl(data) ? UrlDriver : MultipartDriver
    const driver = new Driver(this.drive)
    return driver.create(data)
  }

  get(fileName) {
    const driver = new StreamDriver(this.drive)
    return driver.create(fileName)
  }
}

module.exports = Upload
