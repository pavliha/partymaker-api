const Picture = require('./Picture')

class Thumbnail extends Picture {

  dimensions = {
    width: 150,
    height: 150
  }

  async save() {
    this.resize(this.dimensions)
    this.appendSuffix('-thumbnail')
    return super.save()
  }
}

module.exports = Thumbnail
