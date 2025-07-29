import { useNavigate } from 'react-router';
import {
	StyledButton,
	StyledContainer,
	StyledSubtitle,
	StyledTitle
} from './ctaPresupuesto.styles';

const CTAPresupuesto = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/contact');
	};

	return (
		<StyledContainer>
			<StyledTitle>Solicita tu presupuesto</StyledTitle>
			<StyledSubtitle>
				Contáctanos y te ayudaremos a encontrar la mejor solución para tu
				proyecto.
			</StyledSubtitle>
			<StyledButton onClick={handleClick}>Solicitar presupuesto</StyledButton>
		</StyledContainer>
	);
};

export default CTAPresupuesto;
