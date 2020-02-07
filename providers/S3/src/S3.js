const S3Client = require('aws-sdk/clients/s3')

class S3 {

  constructor(config) {
    this.config = config
    this.s3 = new S3Client({
      accessKeyId: config.get('drive.disks.s3.key'),
      secretAccessKey: config.get('drive.disks.s3.secret'),
      region: config.get('drive.disks.s3.region'),
    })
  }

  async list() {
    const params = { Bucket: this.config.get('drive.disks.s3.bucket') }
    const { Contents } = await this.s3.listObjects(params).promise()
    return Contents.map(object => object.Key)
  }

}

module.exports = S3
