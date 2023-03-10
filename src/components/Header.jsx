import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Logo from '../img/logo.png'

function Header(props) {
  const { items } = props;
  return (
    <div>
      <div className='header'>
        <Link to="/">
          <img src={Logo} className='logo' alt='logo' />
        </Link>
        <Link to='/cart'>
          <p><i className='fa-solid fa-shopping-cart'></i> <sup className='countitem'>{items}</sup> Cart</p>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Header;