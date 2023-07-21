const initialState = {
    products: [],
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {
        items: [],
        quantity: 0,
        total: 0
    },
    searchedItems: []
}
export default initialState