import React from "react";
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import FormTask from '../tasks/FormTask';
import TasksList from '../tasks/TasksList';

const Projects = () => {
  return (
    <div className="contenedor-app">

      <Sidebar/>

      <div className="seccion-principal">
        <Bar/>
        <main>
          <FormTask/>
          <div className="contenedor-tareas">
            {/* Administrar las tareas */}
            <TasksList/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
