const processMultipart = (multipart) => new Promise(async resolve => {
  multipart.file('file', {}, async file => {
    resolve(file)
  })
  await multipart.process()
})

module.exports = processMultipart
