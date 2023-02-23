import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Cart from './components/Cart';
import Details from './components/Details';
import Header from './components/Header'
import Main from './components/Main'
import Thanks from './components/Thanks';

function App() {

	const [qty, setqty] = useState(1);

	function q(a) {
		setqty(qty + a)
		console.log(qty + 1);
	}


	const [products, setProducts] = useState([
		{
			"pid": 1,
			"pname": "Ruby Slippers",
			"pshort": "An impressive pair of slippers  featuring   thousands of real rubies.",
			"plong": "An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.An impressive pair of slippers  featuring   thousands of real rubies.",
			"pprice": "684750000",
			"pimg": "https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/ActualRubyRubySlippers.jpg"
		},
		{
			"pid": 2,
			"pname": "Chocolate Pudding",
			"pshort": "This better be the best pudding you ever ate!",
			"plong": "An impressive pair of slippers  featuring   thousands of real rubies.",
			"pprice": "684750000",
			"pimg": "https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/ActualRubyRubySlippers.jpg"
		}
	]);



	useEffect(() => {


		fetch(`http://localhost:8080/product`)
			.then((response) => response.json()).then(result => { setProducts(result) });
	}, []);

	const [mycart, setmycart] = useState([]);

	const addtocart = (data, first) => {
		const exist = mycart.find((x) => x.pid === data.pid);
		if (exist) {

			const newItem = mycart.map((x) =>
				x.pid == data.pid && first == 1 ? { ...exist, pqty: exist.pqty + 1 } : x
			);

			setmycart(newItem);
		}
		else {
			data.pqty = 1;
			setmycart([...mycart, data])
		}

	}

	const removefromcart = (data, r) => {
		const exist = mycart.find((x) => x.pid === data.pid);
		if (exist) {
			const newItem = mycart.map((x) =>
				x.pid == data.pid ? { ...exist, pqty: exist.pqty - 1 } : x
			);
			setmycart(newItem);
			if (exist.pqty == 1 || r == 1) {
				setmycart(mycart =>
					mycart.filter(item => {
						return item.pid !== exist.pid;
					}))
			}
		}
	}


	const checkout = () => {

		const finalCart = [...mycart].map(x => ({ ...x, ptotoalprice: x.pprice * x.pqty }))

		// console.log(finalCart);

		fetch('http://localhost:8081/order', {
			method: 'POST',
			body: JSON.stringify(finalCart),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}).then((post) => {
			console.log('Data Saved');

		})
			.catch((err) => {
				console.log(err.message);
			});

		setmycart([])
	}


	return (
		<div>

			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Header items={mycart.length} />}>
						<Route index element={<Main productlist={products} onclick={addtocart} removefromcart={removefromcart} mycart={mycart} />} />
						<Route path='/cart' element={<Cart mycart={mycart} removefromcart={removefromcart} checkout={checkout} />} />
						<Route path='/product/:pid' element={<Details products={products} onclick={addtocart} removefromcart={removefromcart} mycart={mycart} />} />
						<Route path='/thanks' element={<Thanks />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
