const { basename, dirname, extname } = require('path')

const appendFileNameSuffix = (fileName, suffix) => {
  const extension = extname(fileName)
  const name = basename(fileName).replace(extension, '')
  const dir = dirname(fileName)
  return `${dir}/${name}${suffix}${extension}`
}

module.exports = appendFileNameSuffix
