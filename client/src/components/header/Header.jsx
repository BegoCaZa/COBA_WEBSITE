import { NavLink } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledHeaderContainer } from './header.styles';

const Header = () => {
	return (
		<StyledHeaderContainer>
			<NavLink to='/'>
				<img src='/assets/images/Header/logotipo 1.svg' />
			</NavLink>
			<Menu />
		</StyledHeaderContainer>
	);
};

export default Header;
