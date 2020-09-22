// Importaciones base
import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';
// importo las acciones para alertas
import { SHOW_ALERT, HIDE_ALERT } from '../../types/index';

const AlertState = props => {
    const initialState = {
        alert: null //estado inicial a null
    }

    // destructuring de 
    const [state, dispatch] = useReducer(alertReducer, initialState);

    //Funciones
    const showAlert = (alertObject) => {

        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg: alertObject.msg,
                category: alertObject.category
            }
        });

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 2500);
    }

    return (
        <alertContext.Provider
            value={{
                alert: state.alert, //estado de alerta
                showAlert // función mostrar alerta
            }}
        > {/* el reste de componentes y props que requerimos */}
            { props.children}
        </alertContext.Provider >
    )
}

export default AlertState;