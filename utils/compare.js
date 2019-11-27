const { differenceBy, intersectionBy } = require('lodash')

const compare = (oldModels, newModels, by) => {
  const toAdd = differenceBy(newModels, oldModels, by)
  const toRemove = differenceBy(oldModels, intersectionBy(newModels, oldModels, by), by)
  return [toAdd, toRemove]
}

module.exports = compare
