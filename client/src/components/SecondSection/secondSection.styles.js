import styled from 'styled-components';
import { TYPOGRAPHY } from '../../styles/Typography';
import { COLORS } from '../../styles/Colors';

export const StyledTextContainer = styled.div`
	text-align: center;
	margin-bottom: 40px;
`;

export const StyledTitle = styled.h2`
	font-family: ${TYPOGRAPHY.headingFont};
	font-size: ${TYPOGRAPHY.headings.h1.mobile.fontSize};
	text-transform: uppercase;
	font-weight: 400;
	color: ${COLORS.irishCoffeeDarkest};
`;

export const StyledSubheader = styled.p`
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: ${TYPOGRAPHY.text.medium.fontSize};
	color: ${COLORS.irishCoffeeDarkest};
	margin-top: 10px;

	@media (min-width: 768px) {
		font-size: ${TYPOGRAPHY.text.large.fontSize};
	}
`;
