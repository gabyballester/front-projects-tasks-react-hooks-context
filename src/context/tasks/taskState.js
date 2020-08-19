import React, {useReducer} from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

const TaskState = props => {
    const initialState = {
        tasks:  [
            { name: "Elegir Plataforma", completed: true, projectId: 1 },
            { name: "Elegir Colores", completed: false, projectId: 2 },
            { name: "Elegir Plataformas de pago", completed: true, projectId: 3 },
            { name: "Elegir Hosting", completed: true, projectId: 4 },
            { name: "Elegir Plataforma", completed: true, projectId: 2 },
            { name: "Elegir Colores", completed: false, projectId: 3 },
            { name: "Elegir Plataformas de pago", completed: true, projectId: 4 },
            { name: "Elegir Hosting", completed: true, projectId: 1 },
            { name: "Elegir Plataforma", completed: true, projectId: 2 },
            { name: "Elegir Colores", completed: false, projectId: 3 },
            { name: "Elegir Plataformas de pago", completed: true, projectId: 4 },
            { name: "Elegir Hosting", completed: true, projectId: 3 },
          ]
    }
    //Crear dispatch y state que vendrán de useReeducer
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return (
        <TaskContext.Provider
        value={{
            tasks: state.tasks
        }}
        >
            {props.children} {/* Esto propaga el state a sus hijos */}
        </TaskContext.Provider>
    )
}

export default TaskState