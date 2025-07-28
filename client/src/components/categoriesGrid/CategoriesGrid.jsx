import { v4 } from 'uuid';

import {
	CategoriesSection,
	CategoryCard,
	CategoryImage,
	CategoryTitle,
	GridContainer
} from './categoriesGrid.styles';
import { getAllCategories } from '../../lib/utils/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriesGrid = () => {
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllCategories();
			setCategories(data);
			console.log('Fetched categories:', data);
		};

		fetchCategories();
	}, []);

	return (
		<CategoriesSection>
			<GridContainer>
				{categories.map(category => (
					<CategoryCard
						key={v4()}
						onClick={() => {
							console.log('Clicked category:', category); // 👈 VERIFICACIÓN
							navigate(`/products/${category}`);
						}}
					>
						<CategoryImage
							src={`/assets/images/categorias/${category}.png`}
							alt={category}
						/>
						<CategoryTitle>{category}</CategoryTitle>
					</CategoryCard>
				))}
			</GridContainer>
		</CategoriesSection>
	);
};

export default CategoriesGrid;
