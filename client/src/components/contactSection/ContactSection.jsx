import {
	StyledContactOptionsContainer,
	StyledGeneralContainer,
	StyledIcon,
	StyledOption,
	StyledSectionHeader,
	StyledSectionTitle,
	StyledSubtitle,
	StyledText
} from './contactSection.styles';

const ContactSection = () => {
	return (
		<StyledGeneralContainer>
			<StyledSectionHeader>
				<StyledSectionTitle>CONTÁCTANOS</StyledSectionTitle>
				<StyledSubtitle>
					Estamos aquí para ayudarte a tener el mejor material para tu proyecto
				</StyledSubtitle>
			</StyledSectionHeader>
			<StyledContactOptionsContainer>
				<StyledOption>
					<StyledIcon src='/assets/images/Contact/5/mail.svg' />
					<StyledText>info@coba.com</StyledText>
				</StyledOption>
				<StyledOption>
					<StyledIcon src='/assets/images/Contact/5/call.svg' />
					<StyledText> (271) 716-0300</StyledText>
				</StyledOption>
				<StyledOption>
					<StyledIcon src='/assets/images/Contact/5/location_on.svg' />
					<StyledText>
						 Km. 335 Blvd. Córdoba a Fortín S/N, Fortín de las Flores, Ver. C.P.
						94470 
					</StyledText>
				</StyledOption>
			</StyledContactOptionsContainer>
			<ContactForm />
		</StyledGeneralContainer>
	);
};

export default ContactSection;
