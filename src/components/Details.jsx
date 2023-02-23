import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Details(props) {
  const navigate = useNavigate();
  const { products, onclick, removefromcart, mycart } = props;
  
  const { pid } = useParams()
  const item = mycart.find(x=>x.pid == pid);
  const product = products.find(pro => pro.pid == pid)
  return (
    <div className='detail-page'>
      <div className='product-Detail'>
        <img src={product.pimg} className='bigimg' />
        <div className='desc-area'>
          <h3 className='proname'>{product.pname}</h3>
          <p className='price'>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'PKR' }).format(product.pprice)}</p>
          <p className='details'>{product.plong}</p>
          <div>

            <div className='quantityboxDetailPage'>
              Qty:
              <p className='btnplus' onClick={() => removefromcart(product, 0)} >-</p>
              <input type='text' value={item ? item.pqty : `1`} readOnly className='quantityinput' />
              <p className='btnplus' onClick={() => onclick(product, 1)} >+</p>
            </div>
            <div>
              {!item ?
                <p className='cartbtn' onClick={() => onclick(product, 1, navigate('/cart'))}><i className='fa-solid fa-shopping-cart'></i> Add to Cart</p>
                :
                <p className='cartbtnview' onClick={() => onclick(product, 0, navigate('/cart'))}><i className='fa-solid fa-shopping-cart'></i> View Cart</p>
              }
            </div>
          </div>



          {/* <div className='quantitybox'>
                    Qty: <input type='text' value="1" className='quantityinput' />
                </div>
                <p className='cartbtn' onClick={() => onclick(product,1,navigate('/cart'))}><i className='fa-solid fa-shopping-cart'></i> Add to Cart</p> */}
        </div>
      </div>
    </div>
  )
}
