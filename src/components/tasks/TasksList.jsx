import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TasksList = () => {
  // Extraer del state
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  //Obtener las tareas del proyecto
  const tasksContext = useContext(taskContext);
  const { projecttasks } = tasksContext;

  // Si no hay proyecto seleccionado muestra esto y corta ejecución
  if (!project) return <h2>Selecciona un proyecto</h2>;

  // Array destructuring para extraer el proyecto actual
  const [currentProject] = project;

  const onClickDelete = () => {
    deleteProject(currentProject._id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {currentProject.nombre}</h2>
      <ul className="listado-tareas">
        {" "}
        {/* uso un ternario */}
        {projecttasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          projecttasks.map((task, key) =>
          <Task key={key} task={task}/>)
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickDelete}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default TasksList;
