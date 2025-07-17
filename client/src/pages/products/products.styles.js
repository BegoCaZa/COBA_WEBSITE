import styled from 'styled-components';
import { TYPOGRAPHY } from '../../styles/Typography';
import { COLORS } from '../../styles/Colors';

export const FirstSection = styled.section`
	background-color: ${COLORS.creamCanLight};
	padding-bottom: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SecondSectionText = styled.div`
	position: absolute;
	top: 75%;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	text-align: left;
	margin-left: 20px;
	gap: 10px;
	width: 330px;
`;
export const Subheader = styled.p`
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: ${TYPOGRAPHY.text.medium.fontSize};
	color: ${COLORS.irishCoffeeDarkest};
	margin: 0;
`;
export const Subtitle = styled.h2`
	font-family: ${TYPOGRAPHY.headingFont};
	font-size: ${TYPOGRAPHY.headings.h1.mobile.fontSize};
	color: ${COLORS.irishCoffeeDarkest};
	margin: 0;
`;
export const Description = styled.p`
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: ${TYPOGRAPHY.text.medium.fontSize};
	color: ${COLORS.irishCoffeeDarkest};
	max-width: 600px;
	margin: 0;
`;
