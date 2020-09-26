import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  // Extraigo info del context de proyectos
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Extraigo info del context de tarea
  const tasksContext = useContext(taskContext);
  const {
    getTasksByProjectId,
    deleteTask,
    selectCurrentTask,
    updateTask,
  } = tasksContext;

  // Extraigo el proyecto
  const [currentProject] = project;

  // Función botón eliminar
  const deleteTaskAction = (id) => {
    // el controlador del back requiere pasar ambos id
    deleteTask(id, currentProject._id);
    getTasksByProjectId(currentProject.id);
  };

  // cambiar estado de completo a incompleto
  const changeState = (task) => {
    if (task.estado) {
      task.estado = false;
    } else {
      task.estado = true;
    } // llamo a actualizar la tarea con esta info
    updateTask(task);
  };

  // Agrega una tarea actual cuando el usuario desea editarla
  const selectTask = (task) => {
    selectCurrentTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.nombre}</p>

      <div className="estado">
        {task.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeState(task)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeState(task)}
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteTaskAction(task._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
