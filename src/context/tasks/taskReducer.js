import {
    PROJECT_TASKS
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
        default: return state;
    }
}