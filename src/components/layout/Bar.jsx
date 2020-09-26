import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authentication/authContext";

const Bar = () => {
  // Extraer la información de autenticación
  // Ponemos disonible authContext y sus diferentes propiedades/funciones
  const authContext = useContext(AuthContext);
  const { user, getAuthUserFromLocalStorage, logOut } = authContext;
  // Si el usuario autenticado cambia, useEffect hará el cambio
  useEffect(() => {
    getAuthUserFromLocalStorage();
    //eslint-disable-next-line
  }, []);

  const closeSession = _ =>{
    logOut()
  }

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hola <span>{user.nombre}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
        className="btn btn-blank cerrar-sesion"
        onClick={()=> closeSession() }
        >Cerrar Sesión</button>
      </nav>
    </header>
  );
};

export default Bar;
