import React, {useContext} from "react";
import projectContext from "../../context/projects/projectContext";

const FormTask = () => {

  //Extraer si un proyecto está activo
  const projectsContext = useContext(projectContext);

  // Extraigo project  
  const { project } = projectsContext;

  // Si no hay proyecto seleccionado muestra esto y corta ejecución
  if(!project) return null;

  // Array destructuring para extraer el proyecto actual
  const [ currentProject ] = project;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="name"
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
