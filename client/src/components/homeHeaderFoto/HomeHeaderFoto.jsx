import {
	Button,
	ContentWrapper,
	Description,
	HeroSection,
	MainTitle
} from './homeHeaderFoto.styles';

const HomeHeaderFoto = () => {
	return (
		<HeroSection>
			<ContentWrapper>
				<MainTitle>
					Construyendo el futuro con materiales de la mejor calidad
				</MainTitle>
				<Description>
					En COBA, ofrecemos más de 30 años de experiencia en la venta y
					fabricación de materiales de construcción.
					<br /> Descubre nuestra amplia gama de productos diseñados para
					satisfacer todas las necesidades de tus proyectos.
				</Description>
				<Button>Cotizar</Button>
			</ContentWrapper>
		</HeroSection>
	);
};

export default HomeHeaderFoto;
