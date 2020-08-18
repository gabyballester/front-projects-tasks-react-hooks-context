import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    PROJECT_FORM,
    GET_PROJECTS
} from '../../types/index';

// State inicial del proyecto
// La regla de hooks dice que ha de ser en mayúscula
const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Tienda virtual' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Diseño UX/UI' },
        { id: 4, name: 'MERN' }
    ]

    const initialState = {
        projects: [], //array vacío de proyectos
        form: false // form a false para estar oculto
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

    //Obtener los proyectos
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
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
                showForm, // función en 2 palabras y mayúscula la 2ª
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;