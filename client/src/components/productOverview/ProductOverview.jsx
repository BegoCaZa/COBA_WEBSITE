import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../lib/utils/api';
import { GeneralContainer, StyledBackButton } from './productOverview.styles';

const ProductOverview = () => {
	const { category, productId } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProduct = async () => {
			setLoading(true);
			try {
				const response = await getProductById(productId);
				setProduct(response);
			} catch (error) {
				console.error('Error fetching product:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchProduct();
	}, [productId]);

	const handleBackClick = () => {
		navigate(`/products/${category}`);
	};

	if (loading) {
		return <div>Loading product...</div>;
	}

	return (
		<GeneralContainer>
			<StyledBackButton onClick={handleBackClick}>
				← Back to {category} products
			</StyledBackButton>
			{product ? (
				<div>
					<img
						src={`/assets/images/tejas/${product.model}.png`}
						alt={product.name}
					/>
					<h1>{product.name}</h1>
					<p>{product.description}</p>
					{product.colors}
					{product.colors ? (
						<ul>
							{product.colors.map((color, index) => (
								<li key={index}>{color}</li>
							))}
						</ul>
					) : (
						<p>No colors available for this product.</p>
					)}
				</div>
			) : null}
		</GeneralContainer>
	);
};

export default ProductOverview;
