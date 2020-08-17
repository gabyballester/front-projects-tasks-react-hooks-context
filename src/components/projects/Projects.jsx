import React from "react";
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';

const Projects = () => {
  return (
    <div className="contenedor-app">

      <Sidebar/>

      <div className="seccion-principal">
        <Bar/>
        <main>
          <div className="contenedor-tareas">
            {/* Administrar las tareas */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
