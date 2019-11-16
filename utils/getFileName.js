const sanitizeFileName = require('sanitize-filename')

const getFileName = (file) => {
  const clientName = file.clientName
    ? file.clientName.substring(0, file.clientName.indexOf('.'))
    : 'no-name'
  const name = sanitizeFileName(clientName)
  return `${new Date().getTime()}-${name}.${file.subtype}`
}

module.exports = getFileName
