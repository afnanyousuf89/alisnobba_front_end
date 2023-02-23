import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Qty from './Qty';

export default function Product(props) {
    const { product, onclick, removefromcart, item } = props;
    const navigate = useNavigate();

    return (

        <div className='product'>
            <img src={product.pimg} className='proimg' />
            <div className='desc-area'>
                <Link to={`product/${product.pid}`}><h3 className='proname'>{product.pname}</h3></Link>
                <p>{product.pshort}</p>
            </div>
            <div className='addtocart-area'>

                <p className='price'>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'PKR' }).format(product.pprice)}</p>

                {/* {item ? <div>
                    
                    <div className='quantitybox'>
                    Qty:
                        <p className='btnplus' onClick={() => removefromcart(product)} >-</p>
                        <input type='text' value={item.qty} readOnly className='quantityinput' />
                        <p className='btnplus' onClick={() => onclick(product)} >+</p>
                    </div>
                </div> :
                    <div>
                        <p className='cartbtn' onClick={() => onclick(product)}><i className='fa-solid fa-shopping-cart'></i> Add to Cart</p>
                    </div>} */}

                <div>

                    <div className='quantitybox'>
                        Qty:
                        <p className='btnplus' onClick={() => removefromcart(product, 0)} >-</p>
                        <input type='text' value={item ? item.pqty : `1`} readOnly className='quantityinput' />
                        <p className='btnplus' onClick={() => onclick(product,1)} >+</p>
                    </div>
                </div>
                <div>
                    {!item ? 
                    <p className='cartbtn' onClick={() => onclick(product, 1, navigate('/cart'))}><i className='fa-solid fa-shopping-cart'></i> Add to Cart</p> 
                    :
                    <p className='cartbtnview' onClick={() => onclick(product, 0, navigate('/cart'))}><i className='fa-solid fa-shopping-cart'></i> View Cart</p>
                    }
                </div>
            </div>
        </div>
    )
}
