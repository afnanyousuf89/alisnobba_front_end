import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { product, onclick } = props;
    return (

        <div className='product'>
            <img src={product.pimg} className='proimg' />
            <div className='desc-area'>
                <Link to={`product/${product.pid}`}><h3 className='proname'>{product.pname}</h3></Link>
                <p>{product.pshort}</p>
            </div>
            <div className='addtocart-area'>
            
                <p className='price'>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'PKR' }).format(product.pprice)}</p>
                <div className='quantitybox'>
                    Qty: 
                    <p className='btnplus'>-</p>
                    <input type='text' onChange={()=>{}} value="1" className='quantityinput' />
                    <p className='btnplus'>+</p>
                </div>
                <p className='cartbtn' onClick={() => onclick(product)}><i className='fa-solid fa-shopping-cart'></i> Add to Cart</p>
            </div>
        </div>
    )
}
