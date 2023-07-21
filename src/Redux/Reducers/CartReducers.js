import { Actions } from "../ActionTypes";
import initialState from "../initialState";
import { showToast, TOAST_ACTION_TYPES } from "../../Utility";
const CartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case Actions.ADD_TO_CART:
            const productToAdd = action.payload.product
            const productIndexInCart = state.items.findIndex(product => product.id === productToAdd.id);
            if (productIndexInCart !== -1) {
                // You have to update the quantity of product here
                const cartItems = state.items.map((product) =>
                    product.id !== productToAdd.id ? product : {
                        ...product, quantity: product.quantity + 1
                    }
                )
                const updatedCart = {
                    items: [...cartItems],
                    quantity: state.quantity + 1,
                    total: state.total + productToAdd.price
                }
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                showToast('Item added to cart', TOAST_ACTION_TYPES.SUCCESS)
                return { ...updatedCart }
            }
            const updatedCart = {
                items: [...state.items, { ...productToAdd, quantity: 1 }],
                quantity: state.quantity + 1,
                total: state.total + productToAdd.price
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            showToast('Item added to cart', TOAST_ACTION_TYPES.SUCCESS)
            return { ...updatedCart }

        case Actions.REMOVE_FROM_CART:
            let isProductPresent = false;
            if (state.quantity) {
                const { product: productToRemove } = action.payload;
                const modifiedCartItems = state.items.map((item) => {
                    if (item.id === productToRemove.id) {
                        isProductPresent = true;
                        const newQuantity = item.quantity - 1;
                        return newQuantity === 0 ? undefined : { ...item, quantity: newQuantity }
                    }
                    return item;
                }).filter(Boolean);
                if (isProductPresent) {
                    const updatedCart = {
                        items: [...modifiedCartItems],
                        quantity: state.quantity - 1,
                        total: state.total - productToRemove.price
                    }
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                    showToast('Item Removed from cart', TOAST_ACTION_TYPES.SUCCESS)
                    return updatedCart
                }
            }
            return state;

        case Actions.REMOVE_ALL_QUANTITY:
            const { id } = action.payload
            const productToRemove = state.items.filter((item) => item.id === id);
            if (productToRemove.length != 0) {
                const remainingProducts = state.items.filter((item) => item.id !== id);
                const cart = {
                    items: [...remainingProducts],
                    quantity: state.quantity - productToRemove[0].quantity,
                    total: state.total - (productToRemove[0].quantity * productToRemove[0].price)
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                showToast('Item Removed from cart', TOAST_ACTION_TYPES.SUCCESS)
                return cart
            }
            return state;

        default:
            return state
    }

}
export default CartReducer;