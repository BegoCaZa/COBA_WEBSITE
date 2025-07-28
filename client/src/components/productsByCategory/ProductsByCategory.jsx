import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getProductsByCategory } from '../../lib/utils/api';
import { v4 } from 'uuid';
import {
	CategoryTitle,
	GeneralContainer,
	ProductCard,
	ProductsGrid
} from './productsByCategory.styles';

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
		<GeneralContainer>
			<button onClick={handleBackClick}>← Volver a categorías</button>

			<CategoryTitle>Productos de {category}</CategoryTitle>

			{products.length > 0 ? (
				<ProductsGrid>
					{products.map(product => (
						<ProductCard key={v4()}>
							<span>{product.name}</span>
						</ProductCard>
					))}
				</ProductsGrid>
			) : (
				<p>No se encontraron productos para esta categoría.</p>
			)}
		</GeneralContainer>
	);
};

export default ProductsByCategory;
