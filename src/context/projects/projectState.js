import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_VALIDATE,
    CURRENT_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR
} from '../../types/index';

import clienteAxios from '../../config/axios';

// State inicial del proyecto
// La regla de hooks dice que ha de ser en mayúscula
const ProjectState = props => {

    const initialState = {
        projects: [], //array vacío de proyectos
        form: false, // form a false para estar oculto
        errorform: false,
        project: null,
        message: null
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
    const getProjects = async () => {
        try {
            const result = await clienteAxios.get('/api/proyectos')
            dispatch({
                type: GET_PROJECTS,
                payload: result.data.proyectos
            })
        } catch (error) {
            //creamos la alerta
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }

    // Agregar nuevo proyecto, le paso el objeto project
    const addProject = async project => {
        //en back espera nombre y no name, por lo que lo cambio
        project.nombre = project.name;
        try {
            const result = await clienteAxios.post('/api/proyectos', project)
            console.log(result);
            //Inserta el payload: proyecto en el state con un dispatch
            dispatch({ type: ADD_PROJECT, payload: result.data.proyecto })
        } catch (error) {
            //creamos la alerta
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
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
    const deleteProject = async projectId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${projectId}`)
            dispatch({ type: DELETE_PROJECT, payload: projectId })
        } catch (error) {
            //creamos la alerta
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
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
                message: state.message,
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