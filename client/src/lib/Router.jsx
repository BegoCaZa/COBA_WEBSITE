import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layouts';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='products' element={<Products />} />
					<Route path='products/:category' element={<ProductsByCategory />} />
				</Route>
			</Routes>
		</>
	);
};

//usar useParams en el componente ProductsByCategory
//

export default Router;
