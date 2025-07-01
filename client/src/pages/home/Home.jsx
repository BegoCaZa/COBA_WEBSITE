import Data from '../../components/data/Data.jsx';
import {
	HeroSection,
	ContentWrapper,
	MainTitle,
	Description,
	Button,
	FirstSection
} from './home.styles.js';

const Home = () => {
	return (
		<FirstSection>
			<HeroSection>
				<ContentWrapper>
					<MainTitle>
						Construyendo el futuro
						<br />
						con materiales de la
						<br /> mejor calidad
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
			<Data />
		</FirstSection>
	);
};

export default Home;
