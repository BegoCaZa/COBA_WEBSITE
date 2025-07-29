import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router';
import { getProductsByCategory } from '../../lib/utils/api';
import { v4 as uuidv4 } from 'uuid';
import {
	CategoryTitle,
	GeneralContainer,
	ProductCard,
	ProductsGrid,
	StyledBackButton
} from './productsByCategory.styles';

const ProductsByCategory = () => {
	const { category, productId } = useParams();
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const isProductSelected = Boolean(productId);

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			try {
				const productsData = await getProductsByCategory(category);
				setProducts(productsData);
			} catch (error) {
				console.error('Error fetching products:', error);
			} finally {
				setLoading(false);
			}
		};

		if (category) {
			fetchProducts();
		}
	}, [category]);

	const handleBackClick = () => {
		navigate('/products');
	};

	const handleProductClick = product => {
		navigate(`/products/${category}/${product._id}`);
	};

	if (loading) {
		return (
			<div>
				<h1>Cargando productos...</h1>
			</div>
		);
	}

	return (
		<GeneralContainer>
			{!isProductSelected && (
				<>
					<StyledBackButton onClick={handleBackClick}>
						← Volver a categorías
					</StyledBackButton>

					<CategoryTitle>{category}</CategoryTitle>

					{products.length > 0 ? (
						<ProductsGrid>
							{products.map(product => (
								<ProductCard
									onClick={() => handleProductClick(product)}
									key={uuidv4()}
								>
									<img
										src={`/assets/images/${category}/${product.model}.png`}
										alt={product.name}
										style={{ width: '100%', height: 'auto' }}
									/>
									<span>{product.name}</span>
								</ProductCard>
							))}
						</ProductsGrid>
					) : (
						<p>No se encontraron productos para esta categoría.</p>
					)}
				</>
			)}

			<Outlet />
		</GeneralContainer>
	);
};

export default ProductsByCategory;
