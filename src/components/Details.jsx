import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details(props) {
    const { products, onclick, removefromcart, item } = props;
    const {pid} = useParams()
    const product = products.find(pro => pro.pid == pid)
  return (
    <div className='detail-page'>
      <div className='product-Detail'>
            <img src={product.pimg} className='bigimg' />
            <div className='desc-area'>
                <h3 className='proname'>{product.pname}</h3>
                <p className='price'>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'PKR' }).format(product.pprice)}</p>
                <p className='details'>{product.plong}</p>
            
                <div className='quantitybox'>
                    Qty: <input type='text' value="1" className='quantityinput' />
                </div>
                <p className='cartbtn' onClick={() => onclick(product)}><i className='fa-solid fa-shopping-cart'></i> Add to Cart</p>
            </div>
        </div>
    </div>
  )
}
