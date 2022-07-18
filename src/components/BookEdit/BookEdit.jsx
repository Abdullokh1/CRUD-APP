import React from 'react'
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from 'react-router-dom'
import books from "../../api/API";

function BookEdit() {
  let location = useLocation();
  let pathId = location.pathname.split('/').at(-1);
  let [isName, setIsName] = useState("");
  let [isAuthor, setIsAuthor] = useState("");
  let [isPrice, setIsPrice] = useState("");
  let [data, setData] = useState([]);

  const fetchData = async() =>{
    const response = await books.getBooks();
    setData(response);
  }

  useEffect(() =>{
    fetchData()
  },[])



  const bookData = {
    id: Date.now(),
    name: isName,
    author: isAuthor,
    price: isPrice,
  }

  const updateData = (id) => {
    books.updataBooks(bookData, id)
    toast.success('Book successfully edited', {
      autoClose: 1500,
    })
 
  }

  return (
    <div className="wrapper-admin">
      <div className="w-50 admin mx-auto shadow rounded-3 p-4">
        <h2 className="text-center text-danger">Control Panel</h2>
        {data.map(item =>{
          if(item.id === +pathId){
            return (
              <div key={item.id}>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="Enter book name"
                    defaultValue={item.name}
                    onChange={(e) => setIsName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="passwordInp"
                    placeholder="Enter author name"
                    defaultValue={item.author}
                    onChange={(e) => setIsAuthor(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="passwordInp"
                    placeholder="Enter Book price"
                    defaultValue={item.price}
                    onChange={(e) => setIsPrice(e.target.value)}
                  />
                </div>
              <button onClick={() => updateData(item.id)} type="submit" className="btn w-100 btn-danger">
                Save changes
              </button>
              </div>
            )
          }
        })}
        <ToastContainer/>
        
      </div>
    </div>
  )
}
export default BookEdit