const initState = {
    product: []
}

const itemEditingReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return action.product
        default:
            return state;
    }
}

export default itemEditingReducer