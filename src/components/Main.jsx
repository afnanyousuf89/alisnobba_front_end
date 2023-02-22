import React from 'react'
import Product from './Product'


function Main(props) {
	const { productlist,onclick,removefromcart,mycart } = props
	return (
		<div>
			<div className='mainarea'>
				{
					productlist.map(pro => {
						return (
						<Product key={pro.pid} product={pro} onclick={onclick} removefromcart={removefromcart} item={mycart.find((x)=> x.pid === pro.pid)} />
						)
					})
				}


			</div>
		</div>
	)
}

export default Main
