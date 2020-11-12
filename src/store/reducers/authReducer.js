const initState = {
    user: [],
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return {
                ...state,
                user: action.user,
                authError: []
            }
        case 'LOGIN_ERROR':
            console.log('Login error')
            return {
                ...state,
                user: [],
                authError: 'Invalid username or password!!!'
            }
        case 'LOGOUT':
            return {
                ...state,
                user: [],
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                user: [],
                authError: null
            }
        case 'SIGNUP_FAILED':
            return {
                ...state,
                user: [],
                authError: 'Username has been registered!'
            }

        default:
            return state
    }
}

export default authReducer