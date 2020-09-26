import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  //Extraer si un proyecto está activo
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext; // Extraigo project

  //Obtener función para traer tareas por id proyecto desde context
  const tasksContext = useContext(taskContext);
  const {
    errortask,
    selectedtask,
    addTask,
    validateTask,
    getTasksByProjectId,
    updateTask,
    cleanTask
  } = tasksContext;

  // Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    console.log("entra en useEffect");
    console.log(nombre);
    if (selectedtask !== null) {
      saveTask(selectedtask);
    } else {
      console.log("solo nombre");
      saveTask({
        nombre: "",
      });
    }
  }, [selectedtask]);

  // state del formulario, traigo saveTask
  const [task, saveTask] = useState({
    nombre: "",
  });

  // extraer el nombre del proyecto
  const { nombre } = task;

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
    if (nombre.trim() === "") {
      validateTask();
      return;
    }

    // si es nueva tarea agregar la tarea al state de tareas
    if (selectedtask === null) {
      task.proyecto = currentProject._id; // traigo id proyecto actual
      addTask(task); // le paso el objeto tarea
    } else {
      // Si es edición, actualizar tarea existente
       updateTask(task);
       // Elimina tareaseleccionada del state
       cleanTask(task);
    }

    // Obtener tareas del proyecto actual
    getTasksByProjectId(currentProject._id);

    //reiniciar el form
    saveTask({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={selectedtask ? "Guardar Tarea" : "Agregar Tarea"}
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
