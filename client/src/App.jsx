import { BrowserRouter } from 'react-router';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/Router';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	);
};

export default App;
