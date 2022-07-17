import React from 'react'

function Home() {
  return (
    <div className='w-50 admin mx-auto shadow rounded-3 p-4'>
      <h2 className='text-center text-danger'>ADMIN DASHBOARD</h2>
        <div className='form-group mb-3'>
          <input type="email" className='form-control' id='Email' placeholder='Enter book name'/>
        </div>
        <div className='form-group mb-3'>
          <input type="text" className='form-control' id='passwordInp' placeholder='Enter author name' />
        </div>
        <div className='form-group mb-3'>
          <input type="number" className='form-control' id='passwordInp' placeholder='Enter Book price' />
        </div>
        <button type='submit' className='btn w-100 btn-danger'>Send</button>
    </div>
  )
}

export default Home