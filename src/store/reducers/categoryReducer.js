const initState = {
    categories: []
}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.categories
            }
        case 'DELETE_CATEGORY':
            let newCategories = state.categories.filter(category => {
                return action.id !== category.categoryId
            });
            return {
                ...state,
                categories: newCategories
            }
        case 'CREATE_CATEGORY':
            return {
                ...state,
                categories: [state.categories, action.category]
            }
        case 'UPDATE_CATEGORY':
            const index = state.categories.findIndex(category => category.categoryId !== action.category.categoryId);

            const newList = state.categories

            newList[index] = action.category
            return {
                ...state,
                categories: newList
            }

        default:
            return state
    }
}

export default categoryReducer