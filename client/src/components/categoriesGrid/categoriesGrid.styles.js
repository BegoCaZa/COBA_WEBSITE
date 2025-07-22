import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CATEGORIES } from '../../constants/categories';

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	padding: 40px 20px;
	max-width: 1200px;
	margin: 0 auto;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
export const CategoryCard = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: inherit;
	background: none;
	border-radius: 12px;
	overflow: hidden;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
	}
`;

export const CategoryImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: 12px;
`;

export const CategoryTitle = styled.span`
	font-size: 14px;
	font-weight: 600;
	color: #333;
	text-align: center;
	padding: 10px 15px;
	margin: 0;
	line-height: 1.3;
`;

export const CategoriesSection = styled.section`
	padding: 80px 0;
	background-color: #f8f9fa;
`;

export const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 10px;
	padding: 15px;
	margin-top: 10px;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	animation: fadeIn 0.3s ease-in-out;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
`;

export const ProductItem = styled.div`
	background: #f0f0f0;
	padding: 10px;
	border-radius: 8px;
	text-align: center;
	font-size: 13px;
	color: #333;
`;
