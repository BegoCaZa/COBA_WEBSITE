import { useEffect, useRef, useState } from 'react';
import { CATEGORIES } from '../../constants/categories';
import {
	StyledGeneralContainer,
	StyledTitle,
	StyledProductCarouselContainer,
	StyledProductCard,
	StyledScrollButton,
	StyledCatalogButton,
	StyledCardText,
	StyledContainer,
	StyledCatalogButtonContainer,
	StyledSubtitle
} from './productsSection.styles';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { v4 } from 'uuid';
import { getAllCategories } from '../../lib/utils/api';
import { useNavigate } from 'react-router-dom';

const ProductsSection = () => {
	const scrollRef = useRef(null);
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	const scroll = direction => {
		const { current } = scrollRef;
		if (current) {
			const scrollAmount = direction === 'left' ? -300 : 300;
			current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	const handleNavigateToProducts = () => {
		navigate('/products');
	};

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllCategories();
			setCategories(data);
			console.log('Fetched categories:', data);
		};

		fetchCategories();
	}, []);

	return (
		<StyledGeneralContainer>
			<StyledTitle>NUESTROS PRODUCTOS</StyledTitle>
			<StyledSubtitle>
				Productos con materiales de la mejor calidad para tus proyectos
			</StyledSubtitle>

			<StyledContainer>
				<StyledScrollButton $left onClick={() => scroll('left')}>
					<ArrowLeft />
				</StyledScrollButton>

				<StyledProductCarouselContainer ref={scrollRef}>
					{categories.map(category => (
						<StyledProductCard key={v4()}>
							<img src={`/assets/images/categorias/${category}.png`} />
							<StyledCardText>{category}</StyledCardText>
						</StyledProductCard>
					))}
				</StyledProductCarouselContainer>

				<StyledScrollButton onClick={() => scroll('right')}>
					<ArrowRight />
				</StyledScrollButton>
			</StyledContainer>

			<StyledCatalogButtonContainer>
				<StyledCatalogButton onClick={handleNavigateToProducts}>
					Ver catálogo
				</StyledCatalogButton>
			</StyledCatalogButtonContainer>
		</StyledGeneralContainer>
	);
};

export default ProductsSection;
