import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  
  //Obtener el state de proyectos
  const projectsContext = useContext(projectContext);
  
  //extraigo la función currengProject
  const { currentProject } = projectsContext;

  //Obtener función para traer tareas por id proyecto desde context
  const tasksContext = useContext(taskContext)
  const {getTasksByProjectId} = tasksContext;

  // Función para agregar el proyecto actual
  const selectProject = (projectId) => {
    currentProject(projectId); //setear el proyecto actual
    getTasksByProjectId(projectId);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project._id)}
      >
        {project.nombre}
      </button>
    </li>
  );
};

export default Project;
