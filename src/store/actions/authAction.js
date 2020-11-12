import callApi from '../../utils/apiCaller'

export const logInRequest = (credentials) => {
    return (dispatch) => {
        return callApi('Auth', 'POST', credentials).then(res => {
            dispatch(logIn(res.data))
        }).catch(err => {
            dispatch({
                type: 'LOGIN_ERROR',
                err
            })
        })
    }
}

export const signUpRequest = (credentials) => {
    return (dispatch) => {
        return callApi('Auth/Register', 'POST', credentials).then(() => {
            const cre = {
                username: credentials.username,
                password: credentials.password
            }
            dispatch(logInRequest(cre))
            // dispatch({
            //     type: 'SIGNUP_SUCCESS'
            // })
        }).catch(err => {
            dispatch({
                type: 'SIGNUP_FAILED',
                err
            })
        })
    }
}

export const logIn = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
}
export const logOut = () => {
    return {
        type: 'LOGOUT'
    }
}