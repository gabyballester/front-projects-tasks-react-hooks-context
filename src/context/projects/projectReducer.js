import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT
} from '../../types/index';

export default (state, action) => {
    switch (action.type) {
        case PROJECT_FORM:
            return {
                ...state,
                form: true
            }

        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        case ADD_PROJECT:
            return {
                ...state, // paso copia de todo el state
                projects: [//Proyets será igual a
                    ...state.projects,//array copia del state projects
                    action.payload],//y el payload (nuevo proyecto)
                form: false //para ocultar el input una vez introducido
            }

        default: return state;
    }
}