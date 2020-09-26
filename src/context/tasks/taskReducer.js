import {
    PROJECT_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK,
    UPDATE_TASK, SELECT_CURRENT_TASK, CLEAN_TASK
} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case PROJECT_TASKS:
            return {
                ...state, // paso copia del state
                //filtro tasks por project id
                projecttasks: action.payload
            }

        case ADD_TASK:
            console.log(action.payload);
            return {
                ...state, // paso copia de todo el state
                projecttasks: [//tasks será igual a
                    ...state.projecttasks,//array copia del state tasks
                    action.payload],//y el payload (nueva tarea)
                errortask: false //para resetearlo
            }

        case VALIDATE_TASK:
            return {
                ...state,
                errortask: true
            }

        case DELETE_TASK:
            return {
                ...state, // paso copia del state y filtro todas excepto la que le paso
                projecttasks: state.projecttasks.filter(
                    task => task._id !== action.payload
                )
            }

        case SELECT_CURRENT_TASK:
            return {
                ...state, selectedtask: action.payload
            }

        case UPDATE_TASK:
            return {
                ...state,
                projecttasks: state.projecttasks.map(task => //recorro array de tareas
                    task._id === action.payload._id ? // si coinciden los ids
                        action.payload //le paso el action.payload que es la tarea actualizada
                        : task // caso contrario le paso tarea sin actualizar
                )
            }

        case CLEAN_TASK:
            return {
                ...state, selectedtask: null
            }

        default: return state;
    }
}