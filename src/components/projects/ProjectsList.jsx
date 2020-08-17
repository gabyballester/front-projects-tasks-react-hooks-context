import React from "react";
import Project from "./Project";

const ProjectsList = () => {

    const projects = [
        {name: 'Tienda virtual'},
        {name: 'Intranet'},
        {name: 'Diseño UX/UI'},
    ]

  return (
    <ul className="listado-proyectos">
        {projects.map(project=>(
            <Project project={project}/>
        ))}
    </ul>
  );
};

export default ProjectsList;
