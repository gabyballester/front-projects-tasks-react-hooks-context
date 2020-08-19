import React, {useReducer} from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

const TaskState = props => {
    const initialState = {
        tasks: [],
    }
    //Crear dispatch y state que vendrán de useReeducer
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return (
        <TaskContext.Provider>
            {props.children} {/* Esto propaga el state a sus hijos */}
        </TaskContext.Provider>
    )
}

export default TaskState