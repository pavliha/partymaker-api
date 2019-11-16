const processFile = (request) => new Promise(async resolve => {
  request.multipart.file('file', {}, async file => {
    resolve(file)
  })

  await request.multipart.process()
})

module.exports = processFile
