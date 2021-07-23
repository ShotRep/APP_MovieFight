const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com', {
    params: {
      apikey: '71bbf30a',
            s: searchTerm
    }
  })
  console.log(response.data)
}

const input = document.querySelector('input')

const debounce = (cbFunc) => {
  let timeoutID
  return (...args) => {
    if (timeoutID) {
       clearTimeout(timeoutID)
    }
    timeoutID = setTimeout(() => {
      cbFunc.apply(null, args)
    }, 1000)
  }  
}

let timeoutID
const onInput = (event) => {
  if (timeoutID) {
    clearTimeout(timeoutID)
  }
  timeoutID = setTimeout(() => {
  fetchData(event.target.value)
  },1000)
}
input.addEventListener('input',onInput)