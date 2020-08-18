import React, { Fragment } from "react";
import Task from "./Task";

const TasksList = () => {
  const projectTasks = [
    { name: "Elegir Plataforma", completed: true },
    { name: "Elegir Colores", completed: false },
    { name: "Elegir Plataformas de pago", completed: true },
    { name: "Elegir Hosting", completed: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {" "}
        {/* uso un ternario */}
        {projectTasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          projectTasks.map((task) => <Task task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
          Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default TasksList;
