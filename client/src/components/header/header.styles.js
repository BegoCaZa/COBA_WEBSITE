import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 20px 20px;
	margin: 0;
	background-color: transparent;
	position: relative;

	@media (min-width: 768px) {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background-color: white;
	}
`;

export const LogoIcon = styled.img`
	height: 40px;
	width: auto;
	@media (min-width: 768px) {
		height: 50px;
		padding-left: 30px;
	}
`;
