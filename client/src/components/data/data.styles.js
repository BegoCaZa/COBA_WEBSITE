import styled from 'styled-components';
import { TYPOGRAPHY } from '../../styles/Typography';

export const StyledDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 40px;
	gap: 40px;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 60px 80px;
	}
`;
export const StyledDataItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 12px;
`;

export const StyledDataNumber = styled.span`
	font-family: ${TYPOGRAPHY.headingFont};
	font-size: 64px;
	font-weight: 400;
	color: white;
	border-right: 3px solid white;
	padding-right: 10px;
`;
export const StyledDataText = styled.span`
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: 14px;
	font-weight: 400;
	color: white;
`;
