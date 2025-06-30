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
`;
export const StyledMenuIconContainer = styled.img`
	cursor: pointer;
	position: absolute;
	right: 0;
	top: -10px;
	z-index: 2;
	scale: 1.2;
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
`;

export const StyledPageTitle = styled.span`
	font-size: ${TYPOGRAPHY.tagline.fontSize};
`;
