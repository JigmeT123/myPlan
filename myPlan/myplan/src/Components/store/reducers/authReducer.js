const stateInit = {
    authError: null,
}


const authReducer = (state= stateInit, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                authError: null,
            };
            case 'LOGIN_ERROR':
                return {
                    ...state,
                    authError: "Log In Failed",
                }
            case 'LOG_OUT_SUCCESS':
                return state
            default:
                return state;
            case 'SIGNUP_SUCCESS':
                return {
                    ...state,
                    authError: null
                }
                case 'SIGNUP_ERROR':
                    return {
                        ...state,
                        authError: action.err.message
                    }
    }
}

export default authReducer;