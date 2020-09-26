import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import clienteAxios from '../../config/axios';

import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SELECT_CURRENT_TASK,
    CLEAN_TASK,
} from '../../types';

const TaskState = props => {
    const initialState = {
        projecttasks: [], //en minúsculas para diferenciar de función
        errortask: false,
        selectedtask: null
    }

    //Crear dispatch y state que vendrán de useReeducer
    const [state, dispatch] = useReducer(TaskReducer, initialState);


    //Crear las funciones de

    //Obtener las tareas de un proyecto
    const getTasksByProjectId = async project => {
        const result = await clienteAxios.get('/api/tareas',
            { params: { project } }
        )
        try {
            dispatch({ type: PROJECT_TASKS, payload: result.data.tareas })
        } catch (error) {
            console.log(error);
        }
    };

    // Agregar una tarea al proyecto seleccionado
    const addTask = async task => { //pasamos objeto task
        console.log('entra addTask');
        try {
            const result = await clienteAxios.post('/api/tareas', task)
            console.log(result);
            dispatch({ type: ADD_TASK, payload: result.data.tarea })
        } catch (error) {
            console.log(error);
        }
    }

    // valida y muestra un error en caso que sea necesario
    const validateTask = () => {
        dispatch({ type: VALIDATE_TASK })
    }

    // Eliminar tarea por id
    const deleteTask = async (id, project) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`,
                { params: { project } })
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Extrae una tarea para edición
    const selectCurrentTask = task => {
        dispatch({
            type: SELECT_CURRENT_TASK,
            payload: task
        })
    }


    // actualiza tarea
    const updateTask = async task => {
        try {
            const result = await clienteAxios
                .put(`/api/tareas/${task._id}`, task)
            dispatch({
                type: UPDATE_TASK,
                payload: result.data.tarea
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const cleanTask = () => {
        dispatch({ type: CLEAN_TASK })
    }

    return (
        <TaskContext.Provider
            value={{
                //states
                projecttasks: state.projecttasks,
                errortask: state.errortask,
                selectedtask: state.selectedtask,
                //funciones
                getTasksByProjectId,
                addTask,
                validateTask,
                deleteTask,
                selectCurrentTask,
                updateTask,
                cleanTask
            }}
        >
            {props.children} {/* Esto propaga el state a sus hijos */}
        </TaskContext.Provider>
    )
}

export default TaskState