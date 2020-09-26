import React, { useContext, useEffect } from "react";
import Project from "./Project";
import ProjectContext from "../../context/projects/projectContext";
import AlertContext from "../../context/alerts/alertContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ProjectsList = () => {
  // Extraer proyectos de state inicial
  const projectsContext = useContext(ProjectContext);
  // destructuro proyectos del context
  const { message, projects, getProjects } = projectsContext;

  // Uso el context de alertas
  const alertContext = useContext(AlertContext);
  // destructuro alertas del context
  const { alert, showAlert } = alertContext;

  //hago uso del useEffect para cuando cargue, para obtener proyectos
  useEffect(() => {
    if (message) {
      showAlert(message.msg, message.category);
    }
    getProjects();
    // eslint-disable-next-line
  }, [message]);

  // compruebo que hay projects de no ser así, devuelve null
  if (projects.length === 0)
    // Devuelve html sin proyectos
    return (
      <p>
        No hay proyectos<br></br>
        <br></br>Empieza creando uno
      </p>
    );

  // renderizado del componente
  return (
    <ul className="listado-tareas">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}

      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={200} classNames="proyecto">
            <Project key={project._id} project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectsList;
