import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  // State para iniciar sesión
  const [user, setUser] = useState({
      nombre: "",
    email: "",
    password: "",
    confirmar: ""
  });

  //extraemos email y password
  const { nombre, email, password, confirmar } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      // esto sirve para el email y el password
      [e.target.name]: e.target.value,
    });
  };

  // Manejo de onSubmit - iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    //validar que no haya campos vacíos

    //Password length minimo 6

    // Passwords coinciden

    //Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="container-form sombra-dark">
        <h1>Obtener cuenta</h1>
        <form onSubmit={onSubmit}>

          <div className="campo-form">
            <label htmlFor="email">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
