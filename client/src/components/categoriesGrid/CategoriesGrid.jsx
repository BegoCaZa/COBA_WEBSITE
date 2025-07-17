import { v4 } from 'uuid';
import { CATEGORIES } from '../../constants/categories';
import {
	CategoriesSection,
	CategoryCard,
	CategoryImage,
	CategoryTitle,
	GridContainer,
	SectionTitle
} from './categoriesGrid.styles';

const CategoriesGrid = () => {
	return (
		<CategoriesSection>
			<SectionTitle>Nuestras Categorías</SectionTitle>
			<GridContainer>
				{CATEGORIES.map(category => (
					<CategoryCard key={v4()}>
						<CategoryImage src={category.src} alt={category.name} />
						<CategoryTitle>{category.name}</CategoryTitle>
					</CategoryCard>
				))}
			</GridContainer>
		</CategoriesSection>
	);
};

export default CategoriesGrid;
