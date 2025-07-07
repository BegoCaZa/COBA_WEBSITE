import {
	StyledCompanyInfo,
	StyledFooterContainer,
	StyledLine,
	StyledLogo,
	StyledSocialMediaContainer,
	StyledSocialMediaLogo,
	StyledTM
} from './footer.styles';

const Footer = () => {
	return (
		<StyledFooterContainer>
			<StyledCompanyInfo>
				<StyledLogo
					src='/assets/images/Header/logotipo 1.svg'
					alt='Logo de la empresa'
				/>
				<StyledSocialMediaContainer>
					<StyledSocialMediaLogo
						src='/assets/images/Footer/4/Facebook.svg'
						alt='Facebook'
					/>
					<StyledSocialMediaLogo
						src='/assets/images/Footer/4/Instagram.svg'
						alt='Instagram'
					/>
					<StyledSocialMediaLogo
						src='/assets/images/Footer/4/X.svg'
						alt='Twitter'
					/>
					<StyledSocialMediaLogo
						src='/assets/images/Footer/4/LinkedIn.svg'
						alt='LinkedIn'
					/>
				</StyledSocialMediaContainer>
			</StyledCompanyInfo>
			<StyledLine />
			<StyledTM>© 2025 COBA. Todos los derechos reservados.</StyledTM>
		</StyledFooterContainer>
	);
};

export default Footer;
