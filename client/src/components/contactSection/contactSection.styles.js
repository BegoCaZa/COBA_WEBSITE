import styled from 'styled-components';
import { TYPOGRAPHY } from '../../styles/Typography';
import { COLORS } from '../../styles/Colors';

export const StyledGeneralContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: ${COLORS.irishCoffeeDark};
	padding: 30px;
`;

export const StyledSectionHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	margin-top: 30px;
`;

export const StyledSectionTitle = styled.h2`
	font-size: 32px;
	font-weight: 700;
	font-family: ${TYPOGRAPHY.headingFont};
	margin: 0;
`;

export const StyledSubtitle = styled.p`
	font-size: 18px;
	font-weight: 400;
	font-family: ${TYPOGRAPHY.bodyFont};
	color: ${COLORS.irishCoffeeDark};
	margin: 0;
`;

export const StyledContactOptionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
	margin-top: 20px;
`;

export const StyledOption = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 15px;
	margin: 0;
`;

export const StyledIcon = styled.img`
	width: 30px;
	height: 30px;
`;

export const StyledText = styled.p`
	font-size: 16px;
	font-weight: 400;
	font-family: ${TYPOGRAPHY.bodyFont};
	color: ${COLORS.irishCoffeeDark};
`;
