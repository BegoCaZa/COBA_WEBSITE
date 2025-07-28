const URL_BASE = 'http://localhost:3000';
const URL_API = '/api/products';

export const getAllCategories = async () => {
	try {
		const response = await fetch(`${URL_BASE}/api/products/categories`);
		if (response.ok) {
			const categories = await response.json();
			return categories;
		} else {
			return [];
		}
	} catch (error) {
		console.error('Error fetching categories:', error);
		throw error;
	}
};

export const getProductsByCategory = async category => {
	try {
		const response = await fetch(
			`${URL_BASE}/api/products/categories/${category}`
		);
		if (response.ok) {
			const products = await response.json();
			return products;
		} else {
			return [];
		}
	} catch (error) {
		console.error('Error fetching products:', error);
		return [];
	}
};

export const getProductById = async id => {
	try {
		const response = await fetch(`${URL_BASE}/api/products/${id}`);
		if (response.ok) {
			const product = await response.json();
			return product;
		} else {
			throw new Error('Product not found');
		}
	} catch (error) {
		console.error('Error fetching product by ID:', error);
		throw error;
	}
};
