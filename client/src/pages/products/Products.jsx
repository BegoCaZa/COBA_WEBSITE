import CategoriesGrid from '../../components/categoriesGrid/CategoriesGrid';
import ProductHeaderFoto from '../../components/productHeaderFoto/ProductHeaderFoto';
import TechnicalInfo from '../../components/technicalInfo/TechnicalInfo';
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
						Descubre nuestra amplia gama de materiales de construcción.
					</Description>
				</SecondSectionText>
			</FirstSection>
			<CategoriesGrid />
			<TechnicalInfo />
		</>
	);
};
export default Products;
