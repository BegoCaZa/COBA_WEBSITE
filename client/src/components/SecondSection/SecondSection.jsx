import { useNavigate } from 'react-router';
import FotoGallery from '../fotoGallery/FotoGallery';
import {
	StyledButton,
	StyledGeneralContainer,
	StyledSubheader,
	StyledTextContainer,
	StyledTitle
} from './secondSection.styles';

const SecondSection = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/contact');
	};
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
			<StyledButton onClick={handleClick}>CONTACTA A UN VENDEDOR</StyledButton>
		</StyledGeneralContainer>
	);
};

export default SecondSection;
