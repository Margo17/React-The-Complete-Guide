import CartContext from './cartContext';

const CartProvider = (props) => {
	const addItemToCartHandler = () => {};

	const removeItemFromCartHandler = () => {};

	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
