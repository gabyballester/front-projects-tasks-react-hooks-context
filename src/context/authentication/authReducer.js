// importo las acciones para auth
import {
    REGISTER_SUCCESS, REGISTER_ERROR, GET_AUTH_USER,
    LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT
} from '../../types/index';
// exporto el estado y la acción
export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false
            }
        case GET_AUTH_USER:
            return {
                ...state, user: action.payload.user,
                token: action.payload.token, authenticated: true,
                loading: false
            }
        case REGISTER_ERROR:
        case LOGIN_ERROR:
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                message: action.payload,
                loading: false
            }
        default: return state;
    }
} 