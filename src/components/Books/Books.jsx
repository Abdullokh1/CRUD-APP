import React from 'react'
import BookItems from './BookItems/BookItems'
import  { useEffect, useState } from 'react'
import books from '../../api/API'

function Books() {
  let [data, setData] = useState([])
  const [loading, setLoading] = useState(false);

  const fetchData = async() =>{
    setLoading(false);
    const data = await books.getBooks()
    setData(data)
    setLoading(true);
  }

  useEffect(() =>{
    fetchData()
  },[])

  if(!loading) {
    return <h4>LOADING . . .</h4>
  }

  return (
    <table className='table table-striped mt-5 m-auto w-75 border'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Book name</th>
          <th>Book author</th>
          <th>Book price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) =>{
          return <BookItems key={item.id} item={item} index={i}/>
        })}
      </tbody>
    </table>
  )
}

export default Books