import { NavLink } from 'react-router-dom';
import { COLORS } from '../../styles/Colors';
import { TYPOGRAPHY } from '../../styles/Typography';
import styled from 'styled-components';

export const StyledMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 0;
	width: 280px;
	position: relative;
	z-index: 1;

	@media (min-width: 768px) {
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px;
	}
`;
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

export const StyledOptionsContainer = styled.ul`
	position: fixed;
	top: 0;
	right: 0;
	width: 254px;
	background: ${COLORS.irishCoffeeDarker};
	backdrop-filter: blur(10px);
	margin: 0;
	padding: 118px 0 0 32px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 32px;

	transform: ${({ $menuOpen }) =>
		$menuOpen ? 'translateX(0)' : 'translateX(100%)'};
	transition: transform 0.5s ease-in-out;

	@media (min-width: 768px) {
		/* Estilos para desktop */
		position: static;
		width: auto;
		height: auto;
		background: white;
		backdrop-filter: none;
		padding: 0;
		flex-direction: row;
		gap: 40px;
		transform: none;
		transition: none;
	}
`;

export const StyledPageItem = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 11px;
	text-decoration: none;
	color: ${COLORS.white};
	font-family: ${TYPOGRAPHY.bodyFont};
	width: 30px;
	padding-bottom: 3px;

	&.active {
		border-bottom: 3px solid ${COLORS.white};
	}

	@media (min-width: 768px) {
		color: ${COLORS.irishCoffeeDarkest};
	}
`;

export const StyledPageTitle = styled.span`
	font-size: ${TYPOGRAPHY.tagline.fontSize};
`;
