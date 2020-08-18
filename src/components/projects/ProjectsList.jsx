import React, { useContext } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ProjectsList = () => {
  // Extraer proyectos de state inicial
  const projectsContext = useContext(projectContext);
  // destructuro proyectos del context
  const { projects } = projectsContext;
  // compruebo que hay projects de no ser así, devuelve null
  if(projects.length===0) return null;
// renderizado del componente
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
