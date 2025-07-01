import { useRef } from 'react';
import { CATEGORIES } from '../../constants/categories';
import {
	StyledGeneralContainer,
	StyledTitle,
	StyledProductCarouselContainer,
	StyledProductCard,
	StyledScrollButton,
	StyledCatalogButton
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
			<p>Productos con materiales de la mejor calidad</p>

			<div style={{ position: 'relative', marginTop: '24px' }}>
				<StyledScrollButton left onClick={() => scroll('left')}>
					<ArrowLeft />
				</StyledScrollButton>

				<StyledProductCarouselContainer ref={scrollRef}>
					{CATEGORIES.map((item, index) => (
						<StyledProductCard key={v4()}>
							<img src={item.src} alt={item.name} />
							<div className='name'>{item.name}</div>
						</StyledProductCard>
					))}
				</StyledProductCarouselContainer>

				<StyledScrollButton onClick={() => scroll('right')}>
					<ArrowRight />
				</StyledScrollButton>
			</div>

			<div style={{ textAlign: 'center', marginTop: '24px' }}>
				<StyledCatalogButton>Ver catálogo</StyledCatalogButton>
			</div>
		</StyledGeneralContainer>
	);
};

export default ProductsSection;
