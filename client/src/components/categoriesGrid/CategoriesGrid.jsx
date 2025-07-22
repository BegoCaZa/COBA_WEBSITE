import { v4 } from 'uuid';
import { CATEGORIES } from '../../constants/categories';

import {
	CategoriesSection,
	CategoryCard,
	CategoryImage,
	CategoryTitle,
	GridContainer,
	ProductItem,
	ProductsGrid
} from './categoriesGrid.styles';
import { getAllCategories, getProductsByCategory } from '../../lib/utils/api';
import { useEffect, useRef, useState } from 'react';

const CategoriesGrid = () => {
	const [categories, setCategories] = useState([]);
	const [expandedCategory, setExpandedCategory] = useState(null);
	const [productsByCategory, setProductsByCategory] = useState({});
	const expandedRef = useRef(null);

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllCategories();
			setCategories(data);
			console.log('Fetched categories:', data);
		};

		fetchCategories();
	}, []);

	const toggleCategory = async category => {
		if (expandedCategory === category) {
			setExpandedCategory(null);
			return;
		}

		// Cargar productos si no existen
		if (!productsByCategory[category]) {
			const products = await getProductsByCategory(category);
			setProductsByCategory(prev => ({
				...prev,
				[category]: products
			}));
			console.log(`Fetched products for category ${category}:`, products);
		}

		setExpandedCategory(category);
	};

	// Detectar clic fuera para cerrar menú
	useEffect(() => {
		const handleClickOutside = event => {
			if (expandedRef.current && !expandedRef.current.contains(event.target)) {
				setExpandedCategory(null);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<CategoriesSection>
			<GridContainer>
				{categories.map(category => (
					<div
						key={v4()}
						ref={expandedCategory === category ? expandedRef : null}
					>
						<CategoryCard as='div' onClick={() => toggleCategory(category)}>
							<CategoryImage
								src={`/assets/images/categorias/${category}.png`}
								alt={category}
							/>
							<CategoryTitle>{category}</CategoryTitle>
						</CategoryCard>

						{expandedCategory === category && (
							<ProductsGrid>
								{productsByCategory[category]?.map(product => (
									<ProductItem key={product.id || v4()}>
										{product.name}
									</ProductItem>
								))}
							</ProductsGrid>
						)}
					</div>
				))}
			</GridContainer>
		</CategoriesSection>
	);
};

export default CategoriesGrid;
