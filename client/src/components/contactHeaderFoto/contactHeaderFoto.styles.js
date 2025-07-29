import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { TYPOGRAPHY } from '../../styles/Typography';

export const HeroSection = styled.div`
	background-image: url('/assets/images/Contact/Header/69.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 0 0 40px 40px;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 20px 30px;
	position: relative;

	@media (min-width: 768px) {
		padding: 0;
		width: 100%;
		height: 650px;
	}
`;

export const ContentWrapper = styled.div`
	position: relative;
	width: 100%;
	color: ${COLORS.white};

	@media (min-width: 768px) {
		padding: 50px 100px;
		margin-top: 40px;
	}
`;

export const MainTitle = styled.h2`
	font-family: ${TYPOGRAPHY.headingFont};
	font-size: ${TYPOGRAPHY.headings.h1.mobile.fontSize};
	text-transform: uppercase;
	font-weight: 400;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

	@media (min-width: 768px) {
		font-size: 60px;
		width: 70%;
		text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
		margin-bottom: 20px;
	}
`;

export const Description = styled.p`
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: ${TYPOGRAPHY.text.medium.fontSize};
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

	@media (min-width: 768px) {
		font-size: 24px;
		width: 65%;
		text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
	}
`;
