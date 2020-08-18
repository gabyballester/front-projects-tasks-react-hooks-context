import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Obtener el state del formulario
  const projectsContext = useContext(projectContext);
  // me traigo lo que necesito de projectsContext
  const { form, showForm, addProject } = projectsContext;

  //state para new project
  const [newProject, saveNewProject] = useState({
    id: "", // esto lo generaremos con una librería posteriormente
    name: "",
  });

  //Extraigo propiedades del proyecto con destructuring
  const { name } = newProject;

  // Función lee contenido del input y guarda estado si objeto cambia
  const onChangeProject = (e) => {
    saveNewProject({
      ...NewProject,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando usuario envía formulario de nuevo proyecto
  const onSubmitProject = e => {
    e.preventDefault();

    //validar el input si está vacío
    if (name === '') {
      return
    };

    // agregar al state
    addProject(newProject)

    //reiniciar el form
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        Nuevo Proyecto
      </button>

      {
        // si form existe o sea si es true
        form ? (
          //retorno

          <form
            onSubmit={onSubmitProject}
            className="formulario-nuevo-proyecto"
          >
            <input
              type="text"
              className="input-text"
              placeholder="Nombre Proyecto"
              name="name"
              value={name}
              onChange={onChangeProject}
            />

            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Agregar Proyecto"
            />
          </form>
        ) : null
      }
    </Fragment>
  );
};

export default NewProject;
