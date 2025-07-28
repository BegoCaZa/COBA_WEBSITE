import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '../../lib/utils/api';
import { v4 } from 'uuid';

const ProductsByCategory = () => {
	const { category } = useParams();
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			const productsData = await getProductsByCategory(category);
			setProducts(productsData);
			setLoading(false);
		};

		if (category) {
			fetchProducts();
		}
	}, [category]);

	const handleBackClick = () => {
		navigate('/products');
	};

	console.log('Category', category);

	if (loading) {
		return (
			<div>
				<h1>Cargando productos...</h1>
			</div>
		);
	}

	return (
		<div>
			<button onClick={handleBackClick}>← Volver a categorías</button>

			<h1>Productos de {category}</h1>

			{products.length > 0 ? (
				<div>
					{products.map(product => (
						<div key={v4()}>
							<h3>{product.name}</h3>
						</div>
					))}
				</div>
			) : (
				<p>No se encontraron productos para esta categoría.</p>
			)}
		</div>
	);
};

export default ProductsByCategory;
