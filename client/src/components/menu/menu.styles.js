import { NavLink } from 'react-router-dom';
import { COLORS } from '../../styles/Colors';
import { TYPOGRAPHY } from '../../styles/Typography';
import styled from 'styled-components';

export const StyledMenuIconContainer = styled.img`
	cursor: pointer;
	position: absolute;
	right: 0;
	top: -10px;
	z-index: 2;
	scale: 1.2;

	@media (min-width: 768px) {
		display: none;
	}
`;
export const StyledMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: space-between;
	margin: 0;
	width: 200px;
	position: relative;
	z-index: 1;

	@media (min-width: 768px) {
		width: 100%;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		padding: 0 50px;
	}
`;

export const StyledOptionsContainer = styled.ul`
	position: fixed;
	top: 0;
	right: 0;
	width: 254px;
	background: ${COLORS.irishCoffeeDarker};
	backdrop-filter: blur(10px);
	margin: 0;
	padding: 118px 0 0 0px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 32px;
	list-style: none; /* Agregar para quitar bullets */

	transform: ${({ $menuOpen }) =>
		$menuOpen ? 'translateX(0)' : 'translateX(100%)'};
	transition: transform 0.5s ease-in-out;

	@media (min-width: 768px) {
		position: static;
		width: auto;
		height: auto;
		background: transparent;
		backdrop-filter: none;
		padding: 0;
		flex-direction: row;
		gap: 40px;
		transform: none;
		transition: none;
		align-items: center;
	}
`;

export const StyledPageItem = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 11px;
	text-decoration: none;
	color: ${COLORS.irishCoffeeDarkest};
	font-family: ${TYPOGRAPHY.bodyFont};
	width: auto;
	padding-left: 30px;

	&.active {
		border-left: 5px solid ${COLORS.white};
	}

	@media (min-width: 768px) {
		color: ${COLORS.irishCoffeeDarkest};
		padding: 8px 16px;
		border-left: none;
		transition: all 0.3s ease;

		&:hover {
			background-color: rgba(0, 0, 0, 0.05); /* Hover sutil */
		}

		&.active {
			border-left: none;
			border-radius: 4px;
			background-color: ${COLORS.irishCoffeeDarker};
			color: white;
		}
	}
`;

export const StyledPageTitle = styled.span`
	font-size: ${TYPOGRAPHY.tagline.fontSize};

	@media (min-width: 768px) {
		font-size: 16px;
		font-weight: 600;
	}
`;
