import callApi from '../../utils/apiCaller'

export const fetchCategoriesRequest = () => {
    return (dispatch) => {
        return callApi('category', 'GET', null).then(res => {
            dispatch(fetchCategories(res.data))
        })
    }
}

export const fetchCategories = (categories) => {
    return {
        type: 'FETCH_CATEGORIES',
        categories
    }
}

export const createCategoryRequest = (category) => {
    return (dispatch) => {
        return callApi('category', 'POST', category).then(res => {
            dispatch(createCategory(res.data))
        })
    }
}

export const createCategory = (category) => {
    return {
        type: 'CREATE_CATEGORY',
        category
    }
}

export const deleteCategoryRequest = (id) => {
    return (dispatch) => {
        return callApi('category/' + id, 'DELETE', null).then(res => {
            dispatch(deleteCategory(id))
        })
    }
}

export const deleteCategory = (id) => {
    return {
        type: 'DELETE_CATEGORY',
        id
    }
}

export const getCategoryRequest = (id) => {
    return (dispatch) => {
        return callApi('category/' + id, 'GET', null).then(res => {
            if (res) dispatch(getCategory(res.data))
        })
    }
}

export const getCategory = (category) => {
    return {
        type: 'GET_CATEGORY',
        category
    }
}

export const updateCategoryRequest = (category) => {
    return (dispatch) => {
        return callApi('category', 'PUT', category).then(res => {
            dispatch(updateCategory(res.data))
        })
    }
}

export const updateCategory = (category) => {
    return {
        type: 'UPDATE_CATEGORY',
        category
    }
}