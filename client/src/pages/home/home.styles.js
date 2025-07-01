import styled from 'styled-components';
import { TYPOGRAPHY } from '../../styles/Typography';
import { COLORS } from '../../styles/Colors';

export const FirstSection = styled.section`
	background-color: ${COLORS.irishCoffeeDarker};
	color: white;
	padding-bottom: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const HeroSection = styled.div`
	background-image: url('/assets/images/Header/construction.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 0 0 40px 40px;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 20px 20px;
	position: relative;
`;

export const ContentWrapper = styled.div`
	position: relative;
	width: 100%;
	color: white;
`;

export const MainTitle = styled.h2`
	font-family: ${TYPOGRAPHY.headingFont};
	font-size: ${TYPOGRAPHY.headings.h1.mobile.fontSize};
	text-transform: uppercase;
	font-weight: 400;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

	/* @media (max-width: 768px) {
		font-size: 2.5rem;
	}

	@media (max-width: 480px) {
		font-size: 2rem;
	} */
`;

export const Description = styled.p`
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: ${TYPOGRAPHY.text.medium.fontSize};
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

	@media (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

export const Button = styled.button`
	background-color: white;
	color: #333;
	border: none;
	padding: 15px 30px;
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: 14px;
	font-weight: 400;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

	&:hover {
		background-color: #f0f0f0;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
	}

	&:active {
		transform: translateY(0);
	}
`;
