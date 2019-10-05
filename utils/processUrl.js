const { basename } = require('path')
const axios = require('axios')
const Drive = use('Drive')

const processUrl = async url => {
  const name = `${new Date().getTime()}-${basename(url)}`
  const response = await axios.get(url, { responseType: 'arraybuffer' })
  const buffer = Buffer.from(response.data, 'base64')
  await Drive.put(name, buffer)
  return name
}

module.exports = processUrl
