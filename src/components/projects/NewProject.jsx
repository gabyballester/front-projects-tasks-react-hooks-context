import React, { Fragment, useState } from "react";

const NewProject = () => {
  //state para new project
  const [newProject, saveNewProject] = useState({
    id: "", // esto lo generaremos con una librería posteriormente
    nombre: "",
  });

  //Extraigo propiedades del proyecto con destructuring
  const { id, nombre } = newProject;

  // Función lee contenido del input y guarda estado si objeto cambia
  const onChangeProject = (e) => {
    saveNewProject({
      ...NewProject,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando usuario envía formulario de nuevo proyecto
  const onSubmitProject = (e) =>{
      e.preventDefault();

      //validar el input

      // agregar al state

      //reiniciar el form

  }

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>

      <form onSubmit={onSubmitProject} className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProject}
        />

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </Fragment>
  );
};

export default NewProject;
