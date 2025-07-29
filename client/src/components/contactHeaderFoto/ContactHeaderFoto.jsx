import {
	ContentWrapper,
	Description,
	HeroSection,
	MainTitle
} from './contactHeaderFoto.styles';

const ContactHeaderFoto = () => {
	return (
		<HeroSection>
			<ContentWrapper>
				<MainTitle>Contacta directamente a un vendedor</MainTitle>
				<Description>
					En COBA, te ofrecemos la oportunidad de contactar directamente a uno
					de nuestros vendedores para resolver todas tus dudas y ayudarte a
					encontrar los productos que mejor se adapten a tus necesidades.
				</Description>
			</ContentWrapper>
		</HeroSection>
	);
};

export default ContactHeaderFoto;
