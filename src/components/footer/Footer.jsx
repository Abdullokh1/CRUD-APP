import React from 'react'

function Footer() {
  return (
    <footer className='p-3 w-100 bg-danger text-center text-white'>
       Admin dashboard - {new Date().getFullYear()}
    </footer>
  )
}

export default Footer