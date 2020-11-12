import callApi from '../../utils/apiCaller'

export const fectProductsRequest = () => {
    return (dispatch) => {
        return callApi('Products', 'GET', null).then(res => {
            dispatch(fetchProducts(res.data));
        });
    };
}

export const fetchProducts = (products) => {
    return {
        type: 'FETCH_PRODUCTS',
        products
    }
}

export const addProductRequest = (product) => {
    return (dispatch) => {
        return callApi('Products', 'POST', product).then(res => {
            if (res)
                dispatch(addProduct(res.data));
        });
    };
}

export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        product
    }
}

export const updateProductRequest = (product) => {
    console.log(product.productId);
    return (dispatch) => {
        return callApi('Products', 'PUT', product).then(res => {
            dispatch(updateProduct(res.data))
        })
    }
}

export const updateProduct = (product) => {
    return {
        type: 'UPDATE_PRODUCT',
        product
    }
}

export const getProductRequest = (id) => {
    return (dispatch) => {
        return callApi('Products/' + id, 'GET', null).then(res => {
            if (res) dispatch(getProduct(res.data));
        })
    }
}

export const getProduct = (product) => {
    return {
        type: 'GET_PRODUCT',
        product
    }
}

export const deleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi('Products/' + id, 'DELETE', null).then(res => {
            dispatch(deleteProduct(id))
        })
    }
}

export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        id
    }
}
// export default fetchProducts