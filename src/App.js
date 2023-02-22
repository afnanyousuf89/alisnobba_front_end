import { useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header'
import Main from './components/Main'

function App() {

	const [products, setProducts] = useState([
		{
			"pid": 1,
			"pname": "Ruby Slippers",
			"pshort": "An impressive pair of slippers  featuring   thousands of real rubies.",
			"plong": "An impressive pair of slippers  featuring   thousands of real rubies.",
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


	return (
		<div>
			<Header items={mycart.length} />
			<Main productlist={products} onclick={addtocart} />
			<Cart mycart={mycart} />
		</div>
	);
}

export default App;
