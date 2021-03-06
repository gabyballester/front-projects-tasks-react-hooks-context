import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
//importo cliente axios
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

// importo las acciones para auth
import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_AUTH_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT
} from '../../types/index';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null,
        loading: true
    }

    // destructuring de 
    const [state, dispatch] = useReducer(authReducer, initialState);

    //Funciones
    const registerUser = async newUser => {
        try {
            const response = await clienteAxios
                .post('/api/usuarios', newUser);
            dispatch({
                type: REGISTER_SUCCESS, // acción
                payload: response.data // token
            })

            //Obtener el usuario
            getAuthUserFromLocalStorage()
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            })
        }
    }

    // Retornar el usuario autenticado
    const getAuthUserFromLocalStorage = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            // Esto agrega a clienteAxios el token en headers
            tokenAuth(token);
        }
        try {
            const response = await clienteAxios.get('api/auth');
            dispatch({
                type: GET_AUTH_USER,
                payload: {
                    user: response.data.user,
                    token: token
                }
            })
        } catch (error) {
            dispatch({ type: LOGIN_ERROR })
        }
    }

    // iniciar sesión
    const userLogin = async data => {
        try {
            const response = await clienteAxios.post('/api/auth', data);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data,
            })
            //Obtener el usuario
            getAuthUserFromLocalStorage()
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    //Cerrar sesión usuario
    const logOut = () => {
        dispatch({ type: LOG_OUT })
    }

    return (
        <authContext.Provider
            value={{
                //properties
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                //functions
                registerUser,
                userLogin,
                getAuthUserFromLocalStorage,
                logOut
            }}
        > {/* el reste de componentes y props que requerimos */}
            { props.children}
        </authContext.Provider >
    )

}
export default AuthState