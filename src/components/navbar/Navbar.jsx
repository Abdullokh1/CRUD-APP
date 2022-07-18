import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='p-3 bg-danger w-100 d-block'>
      <nav>
        <ul className='nav__ul d-flex justify-content-around w-25 list-unstyled text-white'>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-link' : 'text-white'} to='/'>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-link' : 'text-white'} to='/Books'>
              Books
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-link' : 'text-white'} to='/Control'>
              Control panel
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar