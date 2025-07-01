import Data from '../../components/data/Data.jsx';
import HomeHeaderFoto from '../../components/homeHeaderFoto/HomeHeaderFoto.jsx';
import SecondSection from '../../components/SecondSection/SecondSection.jsx';
import { FirstSection } from './home.styles.js';

const Home = () => {
	return (
		<FirstSection>
			<HomeHeaderFoto />
			<Data />
			<SecondSection />
		</FirstSection>
	);
};

export default Home;
