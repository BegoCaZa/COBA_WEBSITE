import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { TYPOGRAPHY } from '../../styles/Typography';

export const StyledContainer = styled.div`
	background-image: url('/assets/images/CTA/41/Card.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 15px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: left;
	margin: 20px;
	background-color: ${COLORS.irishCoffeeDark};

	@media (min-width: 768px) {
		padding: 30px;
		margin: 40px;
		justify-content: center;
	}
`;

export const StyledTitle = styled.h2`
	font-size: 32px;
	font-weight: 700;
	font-family: ${TYPOGRAPHY.headingFont};
	color: ${COLORS.white};
	text-align: left;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
	margin-bottom: 0;

	@media (min-width: 768px) {
		font-size: 42px;
		font-weight: 600;
	}
`;

export const StyledSubtitle = styled.p`
	font-size: 18px;
	font-weight: 400;
	font-family: ${TYPOGRAPHY.bodyFont};
	color: ${COLORS.white};
	text-align: left;
	margin-top: 10px;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

	@media (min-width: 768px) {
		font-size: 20px;
	}
`;

export const StyledButton = styled.button`
	background-color: ${COLORS.creamCanLight};
	color: ${COLORS.irishCoffeeDarkest};
	font-size: 16px;
	font-weight: 600;
	font-family: ${TYPOGRAPHY.bodyFont};
	padding: 12px 24px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	width: 70%;

	&:hover {
		background-color: ${COLORS.irishCoffeeDarker};
		color: ${COLORS.white};
	}

	@media (min-width: 768px) {
		width: 20%;
	}
`;
