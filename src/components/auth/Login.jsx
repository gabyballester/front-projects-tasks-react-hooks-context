import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // State para iniciar sesión
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //extraemos email y password
  const { email, password } = user;

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

    //Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="container-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
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
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={"/new-account"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
