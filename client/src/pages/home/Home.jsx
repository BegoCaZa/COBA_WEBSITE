import CTAPresupuesto from '../../components/ctaPresupuesto/CTApresupuesto.jsx';
import Data from '../../components/data/Data.jsx';
import HomeHeaderFoto from '../../components/homeHeaderFoto/HomeHeaderFoto.jsx';
import MapsSection from '../../components/mapsSection/MapsSection.jsx';
import ProductsSection from '../../components/productsSection/ProductsSection.jsx';
import SecondSection from '../../components/SecondSection/SecondSection.jsx';
import { FirstSection } from './home.styles.js';

const Home = () => {
	return (
		<>
			<FirstSection>
				<HomeHeaderFoto />
				<Data />
			</FirstSection>
			<SecondSection />
			<ProductsSection />
			<CTAPresupuesto />
			<MapsSection />
		</>
	);
};

export default Home;
