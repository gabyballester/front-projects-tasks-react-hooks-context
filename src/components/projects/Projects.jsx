import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import FormTask from "../tasks/FormTask";
import TasksList from "../tasks/TasksList";
import AuthContext from "../../context/authentication/authContext";

const Projects = () => {
  // Extraer la información de autenticación
  // Ponemos disonible authContext y sus diferentes propiedades/funciones
  const authContext = useContext(AuthContext);
  const { getAuthUserFromLocalStorage } = authContext;
  // Si el usuario autenticado cambia, useEffect hará el cambio
  useEffect(() => {
    getAuthUserFromLocalStorage();
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Bar />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            {/* Administrar las tareas */}
            <TasksList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
