import { v4 } from 'uuid';
import { CATEGORIES } from '../../constants/categories';

import {
	CategoriesSection,
	CategoryCard,
	CategoryImage,
	CategoryTitle,
	GridContainer
} from './categoriesGrid.styles';
import { getAllCategories } from '../../lib/utils/api';
import { useEffect, useState } from 'react';

const CategoriesGrid = () => {
	const [categories, setCategories] = useState([]);

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
					<CategoryCard key={v4()}>
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

//con useEffect hacer peticion al back de la url de categories

export default CategoriesGrid;
