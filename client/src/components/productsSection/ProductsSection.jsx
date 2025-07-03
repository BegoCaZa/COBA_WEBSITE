import { useRef } from 'react';
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

const ProductsSection = () => {
	const scrollRef = useRef(null);

	const scroll = direction => {
		const { current } = scrollRef;
		if (current) {
			const scrollAmount = direction === 'left' ? -300 : 300;
			current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	return (
		<StyledGeneralContainer>
			<StyledTitle>NUESTROS PRODUCTOS</StyledTitle>
			<StyledSubtitle>
				Productos con materiales de la mejor calidad para tus proyectos
			</StyledSubtitle>

			<StyledContainer>
				<StyledScrollButton left onClick={() => scroll('left')}>
					<ArrowLeft />
				</StyledScrollButton>

				<StyledProductCarouselContainer ref={scrollRef}>
					{CATEGORIES.map(item => (
						<StyledProductCard key={v4()}>
							<img src={item.src} alt={item.name} />
							<StyledCardText>{item.name}</StyledCardText>
						</StyledProductCard>
					))}
				</StyledProductCarouselContainer>

				<StyledScrollButton onClick={() => scroll('right')}>
					<ArrowRight />
				</StyledScrollButton>
			</StyledContainer>

			<StyledCatalogButtonContainer>
				<StyledCatalogButton>Ver catálogo</StyledCatalogButton>
			</StyledCatalogButtonContainer>
		</StyledGeneralContainer>
	);
};

export default ProductsSection;
