const initState = {
    categories: [],
    status: null
}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.categories,
                status: null
            }
        case 'DELETE_CATEGORY':
            let newCategories = state.categories.filter(category => {
                return action.id !== category.categoryId
            });
            return {
                ...state,
                categories: newCategories,
                status: null
            }
        case 'CREATE_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.category],
                status: 'create'
            }
        case 'UPDATE_CATEGORY':
            const index = state.categories.findIndex(category => category.categoryId === action.category.categoryId);

            const newList = state.categories

            newList[index] = action.category
            return {
                ...state,
                categories: [...newList],
                status: 'updated'
            }

        default:
            return state
    }
}

export default categoryReducer