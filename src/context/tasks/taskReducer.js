import {
    PROJECT_TASKS,
    ADD_TASK
} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case PROJECT_TASKS:
            return {
                ...state, // paso copia del state
                //filtro tasks por project id
                projecttasks: state.tasks.filter(
                    task => task.projectId === action.payload
                )
            }

        case ADD_TASK:
            return {
                ...state, // paso copia de todo el state
                tasks: [//tasks será igual a
                    ...state.tasks,//array copia del state tasks
                    action.payload],//y el payload (nueva tarea)
                // form: false, //para ocultar el input una vez introducido
                // errorform: false, //para resetearlo
            }

        default: return state;
        
    }
}