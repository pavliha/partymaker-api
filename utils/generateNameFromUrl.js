const { basename } = require('path')

const generateNameFromUrl = (url) => {
  try {
    return `${new Date().getTime()}-${basename(url)}`
  } catch (error) {
    return `${new Date().getTime()}`
  }
}

module.exports = generateNameFromUrl
