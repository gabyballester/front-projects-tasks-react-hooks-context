import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";

const FormTask = () => {
  //Extraer si un proyecto está activo
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;// Extraigo project

    // state del formulario, traigo addTask
    const [task, addTask ] = useState({
      name: ''
    })

    // extraer el nombre del proyecto
    const { name } = task;

  // Si no hay proyecto seleccionado muestra esto y corta ejecución
  if (!project) return null;

  // Array destructuring para extraer el proyecto actual
  const [currentProject] = project;

  // leer los valores del formulario  
  const handleChange = e => {
    addTask({
      ...task, [e.target.name] : e.target.value
    })
  }

  // Añadir nueva tarea
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar formulario

    // pasar la validación de

    // agregar la tarea al state de TAREAS

    //reiniciar el form
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
