const { basename } = require('path')
const BaseUpload = require('./BaseUpload')
const fetch = require('node-fetch')


class UrlUpload extends BaseUpload {

  async create(url) {
    const response = await fetch(url)
    this.fileName = this._generateName(url)
    this.fileStream = response.body
    return this
  }

  _generateName(url) {
    try {
      return `${new Date().getTime()}-${basename(url)}`
    } catch (error) {
      return `${new Date().getTime()}`
    }
  }

}

module.exports = UrlUpload
