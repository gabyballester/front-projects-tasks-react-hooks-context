import {
    PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM,
    CURRENT_PROJECT, DELETE_PROJECT, PROJECT_ERROR
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
                form: false, //para ocultar el input una vez introducido
                errorform: false, //para resetearlo
            }

        case VALIDATE_FORM:
            return {
                ...state, //copia del state
                errorform: true // el error pasa a ser true
            }

        case CURRENT_PROJECT:
            return {
                ...state,
                project: state.projects.filter(project =>
                    //filtrará cuando sea igual a ese
                    project._id === action.payload
                )
            }

        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project =>
                    //filtrará cuando sea igual a ese
                    project._id !== action.payload
                ),
                project: null
            }
        case PROJECT_ERROR:
            return {
                ...state, message: action.payload
            }

        default: return state;
    }
}