const { differenceBy, intersectionBy } = require('lodash')

const compare = (oldModels, newModels, by) => {
  const toAdd = differenceBy(newModels, oldModels, by).filter(m => !m.created_at)
  const toRemove = differenceBy(oldModels, intersectionBy(newModels, oldModels, by), by)
  const toUpdate = newModels.filter(m => m.created_at)
  return [toAdd, toRemove, toUpdate]
}

module.exports = compare
