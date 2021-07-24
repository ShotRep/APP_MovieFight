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

const onInput = debounce(event => {
  fetchData(event.target.value)
  })  
  input.addEventListener('input',onInput, 500)