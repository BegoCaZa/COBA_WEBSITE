import styled from 'styled-components';

export const GalleryGrid = styled.div`
	display: grid;
	gap: 20px;
	margin-bottom: 40px;
	padding: 0 20px;

	/* Mobile: 1 columna */
	grid-template-columns: 1fr;

	/* Desktop: Grid complejo */
	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 200px);
		height: 620px;
	}
`;
export const BaseGalleryItem = styled.div`
	border-radius: 15px;
	overflow: hidden;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	background: white;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
	}

	/* Mobile: todas las imágenes iguales */
	height: 250px;

	@media (min-width: 768px) {
		height: auto;
	}
`;
// Imagen grande izquierda (ladrillos)
export const LargeLeftItem = styled(BaseGalleryItem)`
	@media (min-width: 768px) {
		grid-column: 1 / 3;
		grid-row: 1 / 3;
	}
`;

// Imagen pequeña superior derecha (concreto)
export const SmallTopRightItem = styled(BaseGalleryItem)`
	@media (min-width: 768px) {
		grid-column: 3 / 5;
		grid-row: 1 / 2;
	}
`;

// Imagen mediana inferior derecha (tejas)
export const MediumBottomRightItem = styled(BaseGalleryItem)`
	@media (min-width: 768px) {
		grid-column: 3 / 5;
		grid-row: 2 / 4;
	}
`;
// Imagen mediana inferior izquierda (construcción)
export const MediumBottomLeftItem = styled(BaseGalleryItem)`
	@media (min-width: 768px) {
		grid-column: 1 / 3;
		grid-row: 3 / 4;
	}
`;

export const GalleryImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
`;
