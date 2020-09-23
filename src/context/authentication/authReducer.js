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
                ...state, authenticated: true, message: null
            }
        case GET_AUTH_USER:
            const token = localStorage.getItem('token');
            console.log('consoleo el payload');
            console.log(action.payload);
            return {
                ...state, user: action.payload.user,
                token: action.payload.token, authenticated: true
            }
        case REGISTER_ERROR:
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            return {
                ...state, token: null, message: action.payload
            }
        default: return state;
    }
} 