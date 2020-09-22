// importo las acciones para alertas
import { SHOW_ALERT, HIDE_ALERT } from '../../types/index';
// exporto el estado y la acción
export default (state, action) => { 
    switch (action.type) {
        case SHOW_ALERT:
            return {
                alert: action.payload
            }
        case HIDE_ALERT: {
            return {
                alert: null
            }
        }
        default: return state;
    }
} 