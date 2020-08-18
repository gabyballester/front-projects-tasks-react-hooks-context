import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from '../../context/projects/projectContext';

const TasksList = () => {

  // Extraer del state 
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Si no hay proyecto seleccionado muestra esto y corta ejecución
  if(!project) return <h2>Selecciona un proyecto</h2>

  // Array destructuring para extraer el proyecto actual
  const [ currentProject ] = project;

  const projectTasks = [
    { name: "Elegir Plataforma", completed: true },
    { name: "Elegir Colores", completed: false },
    { name: "Elegir Plataformas de pago", completed: true },
    { name: "Elegir Hosting", completed: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: {currentProject.name}</h2>
      <ul className="listado-tareas">
        {" "}
        {/* uso un ternario */}
        {projectTasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          projectTasks.map((task) => <Task task={task} />)
        )}
      </ul>

      <button
      type="button"
      className="btn btn-eliminar"
      onClick={()=>deleteProject(currentProject.id)}
      >
          Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default TasksList;
