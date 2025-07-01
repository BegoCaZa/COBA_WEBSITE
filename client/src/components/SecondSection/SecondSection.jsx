import FotoGallery from '../fotoGallery/FotoGallery';
import {
	StyledSubheader,
	StyledTextContainer,
	StyledTitle
} from './secondSection.styles';

const SecondSection = () => {
	return (
		<>
			<StyledTextContainer>
				<StyledTitle>CALIDAD QUE SE VE</StyledTitle>
				<StyledSubheader>
					Descubre algunos de los proyectos completados con materiales de la
					mejor calidad COBA
				</StyledSubheader>
			</StyledTextContainer>
			<FotoGallery />
		</>
	);
};

export default SecondSection;
