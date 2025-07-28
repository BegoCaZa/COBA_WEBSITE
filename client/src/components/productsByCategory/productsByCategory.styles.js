import styled from 'styled-components';

export const GeneralContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin-top: 100px;
	padding: 20px;
	background-color: #f0f0f0;
	min-height: 100vh;
`;
export const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
	padding: 20px;
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
`;
