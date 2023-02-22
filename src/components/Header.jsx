import React from 'react'

function Header(props) {
  const {items} = props;
  return (
    <div className='header'>
      <img src="Logo.png" className='logo' />
      <p><i className='fa-solid fa-shopping-cart'></i> <sup className='countitem'>{items}</sup> Cart</p>
    </div>
  )
}

export default Header;