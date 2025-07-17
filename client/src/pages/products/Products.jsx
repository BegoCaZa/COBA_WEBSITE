import ProductHeaderFoto from '../../components/productHeaderFoto/ProductHeaderFoto';
import {
	Description,
	FirstSection,
	SecondSectionText,
	Subheader,
	Subtitle
} from './products.styles';

const Products = () => {
	return (
		<>
			<FirstSection>
				<ProductHeaderFoto />
				<SecondSectionText>
					<Subheader>Construyendo con calidad</Subheader>
					<Subtitle>PRODUCTOS</Subtitle>
					<Description>
						Descubre nuestra amplia gama de<br></br>materiales de construcción.
					</Description>
				</SecondSectionText>
			</FirstSection>
		</>
	);
};
export default Products;
