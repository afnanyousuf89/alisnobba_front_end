import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Cart(props) {
	const navigate = useNavigate();
	const { mycart, removefromcart, checkout } = props
	let sno = 0;
	let t = 0;
	return (
		<div className='showcart'>
			{
				!mycart[0] ? <div className='noIteminCart'>Your Cart Is Empty <i className='fa-solid fa-shopping-cart'></i></div> :
					<div>
						<table>
							<thead>
								<tr>
									<th>S#</th>
									<th>Image</th>
									<th>Name</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
									<th>Remove</th>
								</tr>
							</thead>
							<tbody>
								{
									mycart.map(x => {
										t = t + x.pprice
										return (
											<tr key={x.pid}>
												<td>{++sno}</td>
												<td><img src={x.pimg} className='proimg' /></td>
												<td>{x.pname}</td>
												<td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'PKR' }).format(x.pprice)}</td>
												<td>{x.pqty}</td>
												<td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'PKR' }).format(x.pqty * x.pprice)}</td>
												<td><p onClick={() => { removefromcart(x, 1) }} className='btnremove'>X</p></td>
											</tr>

										);
									})
								}

							</tbody>

						</table>
						<div className='totalamt'>
							Total Amount: <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'PKR' }).format(t)}</span>
						</div>

						<div className='btncheckout' onClick={() => checkout(navigate('/thanks'))}>
							<i className='fa-solid fa-shopping-cart'></i>Check Out
						</div>
					</div>


			}


			<Link to="/">
				<div className='goBackShopping'>
					<i className='fa-solid fa-shopping-cart'></i>Continue Shopping
				</div>
			</Link>
		</div>

	)
}
