import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

export const FirstSection = styled.section`
	color: white;
	background-color: ${COLORS.irishCoffeeLightest};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SecondSection = styled.section`
	background-color: ${COLORS.irishCoffeeLightest};
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
`;
