import React, { useReducer } from 'react';
import { v4 as uuidv4 } from "uuid";
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT
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

    // Agregar nuevo proyecto, le paso el objeto project
    const addProject = project => {
        //modifico su id
        project.id = uuidv4();
        //Inserta el payload: proyecto en el state con un dispatch
        dispatch({ type: ADD_PROJECT, payload: project })
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
                getProjects,
                addProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;