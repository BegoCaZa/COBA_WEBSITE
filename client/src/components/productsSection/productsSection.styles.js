import styled from 'styled-components';
import { TYPOGRAPHY } from '../../styles/Typography';

export const StyledGeneralContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
`;
export const StyledTitle = styled.h2`
	font-size: 32px;
	font-weight: 500;
	font-family: ${TYPOGRAPHY.headingFont};
	text-transform: uppercase;
	margin-bottom: 20px;
	color: #333;
`;

export const StyledProductCarouselContainer = styled.div`
	display: flex;
	overflow-x: auto;
	scroll-behavior: smooth;
	gap: 16px;
	padding: 16px 32px;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const StyledProductCard = styled.div`
	width: 300px;
	height: 360px;
	flex-shrink: 0;
	background: white;
	border-radius: 12px;
	/* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
	/* padding: 12px; */
	text-align: left;

	img {
		width: 100%;
		height: 340px;
		object-fit: cover;
		border-radius: 8px;
	}

	.name {
		margin-top: 8px;
		font-weight: 600;
	}
`;

export const StyledScrollButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: white;
	border: none;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	border-radius: 50%;
	padding: 10px;
	cursor: pointer;
	z-index: 10;
	transition: background 0.3s ease;

	${props => (props.left ? 'left: 0;' : 'right: 0;')}

	&:hover {
		background: #f0f0f0;
	}
`;

export const StyledCatalogButton = styled.button`
	padding: 10px 20px;
	border: 1px solid #ccc;
	border-radius: 6px;
	background: white;
	cursor: pointer;
	transition: background 0.3s ease;

	&:hover {
		background: #f9f9f9;
	}
`;
