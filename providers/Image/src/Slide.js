const Picture = require('./Picture')

class Slide extends Picture {

  dimensions = {
    height: 250,
  }

  save() {
    this.resize(this.dimensions)
    this.appendSuffix('-slide')
    return super.save()
  }
}

module.exports = Slide
