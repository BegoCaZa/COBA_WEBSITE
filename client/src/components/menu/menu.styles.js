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
		justify-content: flex-end; /* Cambio: alinear a la derecha */
		align-items: center;
		padding: 0 20px; /* Agregar padding */
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
		background: transparent; /* Cambio: fondo transparente */
		backdrop-filter: none;
		padding: 0;
		flex-direction: row;
		gap: 40px; /* Reducir gap */
		transform: none;
		transition: none;
		align-items: center; /* Centrar verticalmente */
	}
`;

export const StyledPageItem = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 11px;
	text-decoration: none;
	color: ${COLORS.white};
	font-family: ${TYPOGRAPHY.bodyFont};
	width: auto; /* Cambio: auto width */
	padding-left: 30px;

	&.active {
		border-left: 5px solid ${COLORS.white};
	}

	@media (min-width: 768px) {
		color: ${COLORS.black}; /* Cambio: color negro para desktop */
		padding: 8px 16px; /* Agregar padding */
		border-radius: 4px; /* Bordes redondeados */
		transition: all 0.3s ease;

		&:hover {
			background-color: rgba(0, 0, 0, 0.05); /* Hover sutil */
		}

		&.active {
			border-bottom: none; /* Quitar borde inferior */
			background-color: ${COLORS.irishCoffeeDarker}; /* Fondo para activo */
			color: white; /* Texto blanco para activo */
		}
	}
`;

export const StyledPageTitle = styled.span`
	font-size: ${TYPOGRAPHY.tagline.fontSize};

	@media (min-width: 768px) {
		font-size: 14px; /* Ajustar tamaño */
		font-weight: 500; /* Peso de fuente */
	}
`;
