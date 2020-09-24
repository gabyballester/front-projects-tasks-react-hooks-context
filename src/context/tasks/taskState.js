import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import clienteAxios from '../../config/axios';

import {
    PROJECT_TASKS,
    ADD_TASK,
    TASK_VALIDATE
} from '../../types';

const TaskState = props => {
    const initialState = {
        projecttasks: [], //en minúsculas para diferenciar de función
        errortask: false
    }
    //Crear dispatch y state que vendrán de useReeducer
    const [state, dispatch] = useReducer(TaskReducer, initialState);


    //Crear las funciones de

    //Obtener las tareas de un proyecto
    const getTasksByProjectId = async project => {
        const result = await clienteAxios.get('/api/tareas',
            { params: { project } }
        )
        console.log(result);
        try {
            dispatch({ type: PROJECT_TASKS, payload: result.data.tareas })
        } catch (error) {
            console.log(error);
        }
    };

    // Agregar una tarea al proyecto seleccionado
    const addTask = async task => { //pasamos objeto task
        task.nombre = task.name;
        console.log(task);
        try {
            const result = await clienteAxios.post('/api/tareas', task)
            console.log(result);
            dispatch({ type: ADD_TASK, payload: task })
        } catch (error) {
            console.log(error);
        }
    }

    // valida y muestra un error en caso que sea necesario
    const validateTask = () => {
        dispatch({ type: TASK_VALIDATE })
    }

    return (
        <TaskContext.Provider
            value={{
                //states
                projecttasks: state.projecttasks,
                errortask: state.errortask,
                //funciones
                getTasksByProjectId,
                addTask,
                validateTask
            }}
        >
            {props.children} {/* Esto propaga el state a sus hijos */}
        </TaskContext.Provider>
    )
}

export default TaskState