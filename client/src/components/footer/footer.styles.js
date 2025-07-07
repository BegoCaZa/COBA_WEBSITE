import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { TYPOGRAPHY } from '../../styles/Typography';

export const StyledFooterContainer = styled.footer`
	background-color: #efebe9;
	color: ${COLORS.irishCoffeeDark};
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const StyledCompanyInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	gap: 20px;

	@media screen {
		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 90%;
			margin-top: 20px;
		}
	}
`;

export const StyledLogo = styled.img`
	width: 100px;
	height: auto;
	margin-bottom: 10px;
`;

export const StyledSocialMediaContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 15px;
`;
export const StyledSocialMediaLogo = styled.img`
	width: 30px;
	height: 30px;
	cursor: pointer;
	transition: transform 0.3s;

	&:hover {
		transform: scale(1.1);
	}
`;

export const StyledLine = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${COLORS.irishCoffeeDark};
	margin: 20px 0;
`;

export const StyledTM = styled.p`
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: ${TYPOGRAPHY.text.small.fontSize};
	color: ${COLORS.irishCoffeeDark};
	text-align: center;
	margin: 0;
`;
