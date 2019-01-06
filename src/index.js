
module.exports = (...fns) => (...values) => {
  return fns.reverse().reduce((values, fn) => {
    return [fn.apply(null, values)]
  }, values).pop()
}
