import { Route, Routes } from 'react-router';
import Layout from './layouts/Layouts';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';
import CategoriesGrid from '../components/categoriesGrid/CategoriesGrid';
import ProductsByCategory from '../components/productsByCategory/ProductsByCategory';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				<Route path='products' element={<Products />}>
					<Route index element={<CategoriesGrid />} />
					<Route path=':category' element={<ProductsByCategory />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
