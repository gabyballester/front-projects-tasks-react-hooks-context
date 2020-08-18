import React, { useReducer } from 'react';
import { v4 as uuidv4 } from "uuid";
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_VALIDATE,
    CURRENT_PROJECT,
    DELETE_PROJECT
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
        form: false, // form a false para estar oculto
        errorform: false,
        project: null
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

    //Valida el formulario de errores
    const showError = () => {
        dispatch({ type: FORM_VALIDATE })
    }

    // Selecciona el proyecto que el usuario dio clic
    const currentProject = projectId => {
        dispatch({ type: CURRENT_PROJECT, payload: projectId })
    }

    // Eliminar proyecto por id
    const deleteProject = projectId => {
        dispatch({ type: DELETE_PROJECT, payload: projectId })
    }

    //devuelvo el context provider como value el state.form
    // dentro props.children bindeado
    return (
        <projectContext.Provider
            value={{
                //state props
                projects: state.projects,
                form: state.form, //state en minusculas
                errorform: state.errorform,
                project: state.project,
                //functions
                showForm, // función en 2 palabras y mayúscula la 2ª
                getProjects,
                addProject,
                showError,
                currentProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;