import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Details from './components/Details';
import Header from './components/Header'
import Main from './components/Main'

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


	const [mycart, setmycart] = useState([]);

	const addtocart = (data) => {
		const exist = mycart.find((x) => x.pid === data.pid);
		if (exist) {
			const newItem = mycart.map((x) =>
				x.pid == data.pid ? { ...exist, qty: exist.qty + 1 } : x
			);
			setmycart(newItem);
		}
		else {
			data.qty = 1;
			setmycart([...mycart, data])
		}
	}

	const removefromcart = (data) => {
		const exist = mycart.find((x) => x.pid === data.pid);
		if (exist) {
			const newItem = mycart.map((x) =>
				x.pid == data.pid ? { ...exist, qty: exist.qty - 1 } : x
			);
			setmycart(newItem);
			if (exist.qty == 1) {
				setmycart(mycart =>
					mycart.filter(item => {
						return item.pid !== exist.pid;
					}))
			}
		}
		else {
			data.qty = 1;
			setmycart([...mycart, data])
		}
		console.log(mycart);
	}




	return (
		<div>

			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Header items={mycart.length} />}>
						<Route index element={<Main productlist={products} onclick={addtocart} removefromcart={removefromcart} mycart={mycart} />} />
						<Route path='/cart' element={<Cart mycart={mycart} />} />
						<Route path='/product/:pid' element={<Details products={products} />} />
					</Route>
				</Routes>
			</BrowserRouter>




		</div>
	);
}

export default App;
