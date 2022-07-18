import axios from 'axios';

const URL = 'http://localhost:5000/booklist'

const books = {
  
  getBooks:  async() =>{
    const data = await axios.get(URL)
    return data.data
  },

  sendBooks: (params) =>{
   return axios.post(URL, params)
  },

  updataBooks: (params, ID) =>{
    axios.put(`${URL}/${ID}`, params)
  },

  deleteBooks: (ID) =>{
    return axios.delete(`${URL}/${ID}`,{})
   },
}

export default books