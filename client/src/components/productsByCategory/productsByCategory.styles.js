import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

export const GeneralContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin-top: 100px;
	padding: 20px;
	min-height: 100vh;
	width: 100%;
`;
export const ProductsGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
		gap: 25px;
	}
`;
export const ProductCard = styled.div`
	background-color: #f9f9f9;
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 16px;
	text-align: center;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s;
	&:hover {
		transform: scale(1.05);
	}
`;
export const CategoryTitle = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 16px;
	color: #333;
	text-transform: uppercase;
`;

export const StyledBackButton = styled.button`
	background-color: ${COLORS.irishCoffeeDark};
	align-self: flex-start;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	margin-bottom: 20px;
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
