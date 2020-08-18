import React, {useContext} from "react";
import projectContext from '../../context/projects/projectContext';

const Project = ({project}) => {

  //Obtener el state de proyectos
  const projectsContext = useContext ( projectContext )
  //extraigo la función currengProject
const { currentProject } = projectsContext; 

  return (
    <li>
      <button type="button" className="btn btn-blank"
      onClick={()=>currentProject(project.id)}
      >
        {project.name}
  
      </button>
    </li>
  );
};

export default Project;
