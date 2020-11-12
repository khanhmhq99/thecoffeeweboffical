import { combineReducers } from 'redux'
import productsReducer from './productReducer'
import itemEditingReducer from './itemEditingReducer'
import authReducer from './authReducer'
import categoryReducer from './categoryReducer'
import categoryEditingReducer from './categoryEditingReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    item: itemEditingReducer,
    product: productsReducer,
    category: categoryReducer,
    categoryEditing: categoryEditingReducer
})

export default rootReducer