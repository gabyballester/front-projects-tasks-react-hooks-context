import {
    PROJECT_TASKS, ADD_TASK, TASK_VALIDATE, TASK_DELETE,
    TASK_UPDATE, TASK_STATE, CURRENT_TASK, CLEAN_TASK
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
            return {
                ...state, // paso copia de todo el state
                projecttasks: [//tasks será igual a
                    ...state.projecttasks,//array copia del state tasks
                    action.payload],//y el payload (nueva tarea)
                errortask: false, //para resetearlo
            }

        case TASK_VALIDATE:
            return {
                ...state,
                errortask: true
            }

        case TASK_DELETE:
            return {
                ...state, // paso copia del state
                projecttasks: state.projecttasks.filter(task => task._id !== action.payload)
            }

        case TASK_UPDATE:
        case TASK_STATE:
            return {
                ...state, projecttasks: state.projecttasks.map(task => task._id !== action.payload.id)
            }

        case CURRENT_TASK:
            return {
                ...state, selectedtask: action.payload
            }

        case CLEAN_TASK:
            return {
                ...state, selectedtask: null
            }

        default: return state;
    }
}