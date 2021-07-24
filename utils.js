const debounce = (cbFunc, delay = 1000) => {
  let timeoutID
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
    timeoutID = setTimeout(() => {
      cbFunc.apply(null, args)
    }, delay)
  }
}
