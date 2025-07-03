import {
	StyledButton,
	StyledContainer,
	StyledSubtitle,
	StyledTitle
} from './ctaPresupuesto.styles';

const CTAPresupuesto = () => {
	return (
		<StyledContainer>
			<StyledTitle>Solicita tu presupuesto</StyledTitle>
			<StyledSubtitle>
				Contáctanos y te ayudaremos a encontrar la mejor solución para tu
				proyecto.
			</StyledSubtitle>
			<StyledButton>Solicitar presupuesto</StyledButton>
		</StyledContainer>
	);
};

export default CTAPresupuesto;
