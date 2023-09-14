import axios from 'axios';

// axios.get(url)

axios
  .get('https://ih-crud-api.herokuapp.com/characters')
  .then((response) => {
    console.log(response.data);
  })
  .catch((e) => {
    console.log(e);
  });

// axios.post(url, data)
