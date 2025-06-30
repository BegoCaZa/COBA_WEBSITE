import { useState } from 'react';
import {
	StyledMenuContainer,
	StyledMenuIconContainer,
	StyledOptionsContainer,
	StyledPageItem,
	StyledPageTitle
} from './menu.styles';
import { PAGES } from '../../constants/pages';
import { v4 } from 'uuid';

const Menu = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const menuIcon = menuOpen
		? '/assets/images/Header/close.svg'
		: '/assets/images/Header/menu.hamburger.svg';

	return (
		<StyledMenuContainer>
			<StyledMenuIconContainer
				src={menuIcon}
				onClick={() => setMenuOpen(!menuOpen)}
			/>
			<nav>
				<StyledOptionsContainer $menuOpen={menuOpen}>
					{PAGES.map(page => (
						<StyledPageItem
							key={v4()}
							to={page.link}
							onClick={() => setMenuOpen(false)}
						>
							<StyledPageTitle>{page.title}</StyledPageTitle>
						</StyledPageItem>
					))}
				</StyledOptionsContainer>
			</nav>
		</StyledMenuContainer>
	);
};
export default Menu;
