import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/styles/style.scss'
import Home from './components/Home/Home'
import Navbar from './components/navbar/Navbar'
import Books from './components/Books/Books'
import Footer from './components/footer/Footer'
import Login from './components/Login/Login'
import Control from './components/Control/Control'
import BookEdit from './components/BookEdit/BookEdit'


function App() {

  return (
    <>
     <BrowserRouter>
       <Navbar/>
       
       <main>
        <Routes>

          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/Books' element={<Books/>}/>
            <Route path='/Control' element={<Control/>}/>
            <Route path='/BookEdit/:id' element={<BookEdit/>}/>

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