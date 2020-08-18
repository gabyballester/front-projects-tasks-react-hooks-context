import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { PROJECT_FORM } from '../../types/index';

// State inicial del proyecto
// La regla de hooks dice que ha de ser en mayúscula
const ProjectState = props => {
    const initialState = {
        projects: [
            { id: 1, name: 'Tienda virtual' },
            { id: 2, name: 'Intranet' },
            { id: 3, name: 'Diseño UX/UI' },
            {id: 4, name: 'MERN'}
        ],
        //empiezo con nuevo proyecto
        form: false
    }
    // Dispatch para ejecutar las acciones
    // creo state con hook useReducer (importado)
    // Le paso un reducer y estado inicial
    const [state, dispatch] = useReducer(projectReducer, initialState)

    // --- Acciones para el CRUD

    // Mostrar el formulario
    const showForm = () => {
        dispatch({ type: PROJECT_FORM })
    }

    //devuelvo el context provider como value el state.form
    // dentro props.children bindeado
    return (
        <projectContext.Provider
            value={{

                //state props
                projects: state.projects,
                form: state.form, //state en minusculas

                //functions
                showForm // función en 2 palabras y mayúscula la 2ª

            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;