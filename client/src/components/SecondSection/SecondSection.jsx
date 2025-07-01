import FotoGallery from '../fotoGallery/FotoGallery';
import {
	StyledButton,
	StyledGeneralContainer,
	StyledSubheader,
	StyledTextContainer,
	StyledTitle
} from './secondSection.styles';

const SecondSection = () => {
	return (
		<StyledGeneralContainer>
			<StyledTextContainer>
				<StyledTitle>CALIDAD QUE SE VE</StyledTitle>
				<StyledSubheader>
					Descubre algunos de los proyectos completados con materiales de la
					mejor calidad COBA
				</StyledSubheader>
			</StyledTextContainer>
			<FotoGallery />
			<StyledButton>CONTACTA A UN VENDEDOR</StyledButton>
		</StyledGeneralContainer>
	);
};

export default SecondSection;
