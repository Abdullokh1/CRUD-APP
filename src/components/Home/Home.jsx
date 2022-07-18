import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import books from "../../api/API";

function Home() {
  let [isName, setIsName] = useState("");
  let [isAuthor, setIsAuthor] = useState("");
  let [isPrice, setIsPrice] = useState("");


  const bookData = {
    id: Date.now(),
    name: isName,
    author: isAuthor,
    price: isPrice,
  }

  const checkData = {
    one: isName.trim().length === 0,
    two: isAuthor.trim().length === 0,
    three: isPrice.trim().length === 0,
  }

  const sendBook = () =>{
    if(checkData.one || checkData.two || checkData.three){
      toast.error('Please fill all the inputs', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
    else{
      books.sendBooks(bookData)
      toast.success('Book successfully added', {
        autoClose: 1500,
      })
      setIsName('')
      setIsAuthor('')
      setIsPrice('')
    }
  }
 


  return (
    <div className="wrapper-admin">
      <div className="w-50 admin mx-auto shadow rounded-3 p-4">
        <h2 className="text-center text-danger">ADMIN DASHBOARD</h2>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="Enter book name"
            value={isName}
            onChange={(e) => setIsName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            id="passwordInp"
            placeholder="Enter author name"
            value={isAuthor}
            onChange={(e) => setIsAuthor(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            id="passwordInp"
            placeholder="Enter Book price"
            value={isPrice}
            onChange={(e) => setIsPrice(e.target.value)}
          />
        </div>
        <button onClick={() => sendBook()} type="submit" className="btn w-100 btn-danger">
          Send
        </button>
        <ToastContainer/>
        
      </div>
    </div>
  );
}

export default Home;
