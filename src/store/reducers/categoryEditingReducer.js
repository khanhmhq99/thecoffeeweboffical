const initState = {
    category: []
}

const categoryEditingReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY':
            return action.category
        default:
            return state;
    }
}

export default categoryEditingReducer