import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/styles/style.scss'
import Home from './components/Home/Home'
import Navbar from './components/navbar/Navbar'
import Private from './private/Private'
import Books from './components/Books/Books'
import Footer from './components/footer/Footer'
import Login from './components/Login/Login'
import Control from './components/Control/Control'
import axios from 'axios'
import books from './api/API';


function App() {
  let [data, setData] = useState([])
  
  useEffect(() =>{
    {books.getBooks().then(data => setData(data))}
  }, [])


  const sendData = () =>{
    axios.post('http://localhost:5000/booklist', {
      id: Date.now(),
      name: 'New one',
      author: 'Someone',
      price: 111,
    })
  }

  const updateData = () =>{
    axios.put('http://localhost:5000/booklist/1657994794468', {
      id: Date.now(),
      name: 'Update',
      author: 'smn',
      price: 0,
    })
  }

  const deleteData = () =>{
    axios.delete('http://localhost:5000/booklist/1657994802150', {})
  }

   console.log(data);

  return (
    <>
     <BrowserRouter>
       <Navbar/>
      <button onClick={() => sendData()} className='btn btn-dark'>Send</button>

       <main>
        <Routes>

          <Route>
            <Route path='/' element={<Private/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Books' element={<Books/>}/>
            <Route path='/Control' element={<Control/>}/>
          </Route>

          <Route path='/Login' element={<Login/>}/>
        </Routes>
       </main>

       <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App