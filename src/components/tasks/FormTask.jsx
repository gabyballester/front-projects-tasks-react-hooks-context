import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  //Extraer si un proyecto está activo
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext; // Extraigo project

  //Obtener función para traer tareas por id proyecto desde context
  const tasksContext = useContext(taskContext);
  const { errortask, addTask, validateTask } = tasksContext;

  // state del formulario, traigo saveTask
  const [task, saveTask] = useState({
    name: "",
  });

  // extraer el nombre del proyecto
  const { name } = task;

  // Si no hay proyecto seleccionado muestra esto y corta ejecución
  if (!project) return null;

  // Array destructuring para extraer el proyecto actual
  const [currentProject] = project;

  // leer los valores del formulario
  const handleChange = (e) => {
    saveTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  // Añadir nueva tarea
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar formulario
    if (name.trim() === "") {
      validateTask();
      return;
    }
    // pasar la validación de

    // agregar la tarea al state de TAREAS
    task.projectId = currentProject.id; // traigo id proyecto actual
    task.completed = false; // estado false
    addTask(task); // le paso el objeto tarea

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
      {errortask ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTask;
