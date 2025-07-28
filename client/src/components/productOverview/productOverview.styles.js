import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

export const StyledBackButton = styled.button`
	background-color: ${COLORS.irishCoffeeDark};
	align-self: flex-start;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	margin-bottom: 0px;
	font-size: 12px;
	transition: background-color 0.3s;
	&:hover {
		background-color: ${COLORS.irishCoffeeDarkest};
		color: white;
	}
	&:focus {
		outline: none;
	}
`;

export const GeneralContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	padding: 20px;
	min-height: 100vh;
	width: 100%;
`;
