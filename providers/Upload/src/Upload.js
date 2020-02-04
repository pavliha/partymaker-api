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
    if (typeof data === 'string') return StreamDriver
    return MultipartDriver
  }

  create(data) {
    const Driver = this.detectDriver(data)
    const driver = new Driver(this.drive)
    return driver.create(data)
  }
}

module.exports = Upload
