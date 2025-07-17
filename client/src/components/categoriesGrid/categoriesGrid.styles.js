import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CATEGORIES } from '../../constants/categories';

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
	background: white;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
	border-radius: 12px 12px 0 0;
`;

export const CategoryTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
	color: #333;
	text-align: center;
	padding: 20px 15px;
	margin: 0;
	line-height: 1.3;
`;
export const SectionTitle = styled.h2`
	text-align: center;
	font-size: 36px;
	font-weight: 700;
	color: #333;
	margin-bottom: 50px;
	text-transform: uppercase;
	letter-spacing: 2px;
`;

export const CategoriesSection = styled.section`
	padding: 80px 0;
	background-color: #f8f9fa;
`;
