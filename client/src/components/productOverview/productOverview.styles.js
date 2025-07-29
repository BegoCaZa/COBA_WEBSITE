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

export const StyledColorList = styled.ul`
	list-style-type: none;
	padding: 0px;
	margin: 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	gap: 10px;
`;

export const StyledListItem = styled.li`
	margin: 5px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	font-size: 16px;
	color: ${COLORS.irishCoffeeDark};
	padding: 10px;
	border-radius: 5px;
	background-color: ${COLORS.irishCoffeeLightest};
	cursor: pointer;
	transition: color 0.3s, text-decoration 0.3s;
	&:hover {
		background-color: ${COLORS.irishCoffeeLight};
		color: ${COLORS.irishCoffeeDarkest};
	}
`;
