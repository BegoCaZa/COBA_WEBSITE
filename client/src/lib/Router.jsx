import { Route, Routes } from 'react-router';
import Layout from './layouts/Layouts';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';
import CategoriesGrid from '../components/categoriesGrid/CategoriesGrid';
import ProductsByCategory from '../components/productsByCategory/ProductsByCategory';
import ProductOverview from '../components/productOverview/ProductOverview';
import ContactPage from '../pages/contactPage/ContactPage';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				<Route path='products' element={<Products />}>
					<Route index element={<CategoriesGrid />} />
					<Route path=':category' element={<ProductsByCategory />}>
						<Route path=':productId' element={<ProductOverview />} />
					</Route>
				</Route>
				<Route path='contact' element={<ContactPage />} />
			</Route>
		</Routes>
	);
};

export default Router;
