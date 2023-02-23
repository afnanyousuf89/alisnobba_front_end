import React from 'react'
import { Link } from 'react-router-dom'
import thanks from '../img/thanks.jpg'

export default function Thanks() {
    return (
        <div className='thankspage'>
            <img src={thanks} alt="thanksimage" className='thanksimg'/>
            <Link to="/">
                <div className='goBackShopping'>
                    <i className='fa-solid fa-shopping-cart'></i>Continue Shopping
                </div>
            </Link>
        </div>
    )
}
