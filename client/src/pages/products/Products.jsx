import { Outlet } from 'react-router';
import ProductHeaderFoto from '../../components/productHeaderFoto/ProductHeaderFoto';
import TechnicalInfo from '../../components/technicalInfo/TechnicalInfo';
import {
	Description,
	FirstSection,
	SecondSectionText,
	Subheader,
	Subtitle
} from './products.styles';
import CTAPresupuesto from '../../components/ctaPresupuesto/CTApresupuesto';
import Footer from '../../components/footer/Footer';

const Products = () => {
	return (
		<>
			<FirstSection>
				<ProductHeaderFoto />
				<SecondSectionText>
					<Subheader>Construyendo con calidad</Subheader>
					<Subtitle>PRODUCTOS</Subtitle>
					<Description>
						Descubre nuestra amplia gama de materiales de construcción.
					</Description>
				</SecondSectionText>
			</FirstSection>

			<Outlet />

			<TechnicalInfo />
			<CTAPresupuesto />
			<Footer />
		</>
	);
};

export default Products;
