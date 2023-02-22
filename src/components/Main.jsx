import React from 'react'
import Product from './Product'


function Main(props) {
	const { productlist,onclick } = props
	return (
		<div>
			<div className='mainarea'>
				{
					productlist.map(pro => {
						return (
						<Product product={pro} onclick={onclick}  />
						)
					})
				}


			</div>
		</div>
	)
}

export default Main
