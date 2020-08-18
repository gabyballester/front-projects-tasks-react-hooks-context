import React, {useReducer} from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';

// State inicial del proyecto
// La regla de hooks dice que ha de ser en mayúscula
const ProjectState = props => {
    const initialState = {
        //empiezo con nuevo proyecto
        form: false
    }
    // Dispatch para ejecutar las acciones
    // creo state con hook useReducer (importado)
    // Le paso un reducer y estado inicial
    const [state, dispatch] = useReducer(projectReducer, initialState)

    // Acciones para el CRUD

    //devuelvo el context provider como value el state.form
    // dentro props.children bindeado
    return (
        <projectContext.Provider
            value={{
                form: state.form
            }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;