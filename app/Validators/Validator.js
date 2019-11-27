const { get, set } = require('lodash')

module.exports = class Validator {
  get data() {
    const { request } = this.ctx
    this.ctx.request.validated = () => Object
      .keys(this.rules)
      .map(rule => [rule, get(request.all(), rule)])
      .reduce((acc, [key, value]) => set(acc, key, value), {})

    return request.all()
  }

  get validateAll() {
    return true
  }
}
