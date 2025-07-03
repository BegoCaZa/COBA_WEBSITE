import styled from 'styled-components';
import { TYPOGRAPHY } from '../../styles/Typography';
import { COLORS } from '../../styles/Colors';

export const StyledContainer = styled.div`
	padding: 20px;
	background-color: #e4dfdd;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	display: flex;
`;

export const StyledMapTitle = styled.h2`
	font-size: 32px;
	font-weight: 700;
	font-family: ${TYPOGRAPHY.headingFont};
	color: ${COLORS.irishCoffeeDark};
	text-align: left;
	margin-bottom: 0;
`;

export const StyledAdressContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	width: 90%;
	margin-bottom: 20px;
`;

export const StyledCity = styled.h3`
	font-size: 24px;
	font-weight: 600;
	font-family: ${TYPOGRAPHY.headingFont};
	color: ${COLORS.irishCoffeeDark};
	text-align: center;
	margin: 0;
`;

export const StyledAdress = styled.p`
	font-size: 16px;
	font-weight: 400;
	font-family: ${TYPOGRAPHY.bodyFont};
	color: ${COLORS.irishCoffeeDark};
	text-align: center;
	margin: 0;
`;

export const StyledMapImgCDB = styled.div`
	width: 100%;
	height: 300px;
	background-image: url('/assets/images/ubicacionCORDOBA.png');
	background-size: cover;
	background-position: center;
	border-radius: 10px;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		height: 200px;
	}
`;

export const StyledMapImgMTY = styled.div`
	width: 100%;
	height: 300px;
	background-image: url('/assets/images/ubicacionMTY.png');
	background-size: cover;
	background-position: center;
	border-radius: 10px;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		height: 200px;
	}
`;
