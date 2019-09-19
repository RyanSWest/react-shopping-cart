import React from 'react';
import{ useContext} from 'react';
// Components
import Product from './Product';
import { ProductContext } from '../contexts/ProductContext';

// const { products, addItem } = useContext(ProductContext);

const Products =  () => {
	const { products, addItem } = useContext(ProductContext);
	console.log(products)
	return (
		<div className="products-container">
			{ products.map(product => (
				<Product
					key={products.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
