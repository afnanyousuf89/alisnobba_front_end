import React from 'react'

export default function Product(props) {
    const { product,onclick } = props;
    return (

        <div className='product'>
            <img src={product.pimg} className='proimg' />
            <div className='desc-area'>
                <h3 className='proname'>{product.pname}</h3>
                <p>{product.pshort}</p>
            </div>
            <div className='addtocart-area'>
                <div className='quantitybox'>
                    Qty: <input type='text' value="1" className='quantityinput' step="1" />
                </div>
                <p className='cartbtn' onClick={()=>onclick(product)}><i className='fa-solid fa-shopping-cart'></i> Add to Cart</p>
            </div>

        </div>

    )
}
