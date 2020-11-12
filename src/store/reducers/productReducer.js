const initState = {
    products: [],
    addStatus: null,
    error: null,
}
const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.products,
                addStatus: null,
                error: null
            }
        case 'ADD_PRODUCT':
            // let newAddProducts = state.products.push(action.product)
            // state.products.push(action.product)
            return {
                ...state,
                products: [...state.products, action.product],
                addStatus: 'added',
                error: null
            }
        case 'DELETE_PRODUCT':
            let newProducts = state.products.filter(product => {
                return action.id !== product.productId
            });
            return {
                ...state,
                products: newProducts
            }
        case 'UPDATE_PRODUCT':
            const index = state.products.findIndex(product => product.productId === action.product.productId);
            console.log(index)

            const newList = state.products

            newList[index] = action.product

            return {
                ...state,
                products: [...newList],
                addStatus: 'updated'
            }
        default:
            return state
    }
}

export default productsReducer