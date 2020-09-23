import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/authentication/authContext";

const Login = (props) => {
  // Extraigo los valores de los context
  // alert
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  // auth
  const authContext = useContext(AuthContext);
  const { message, authenticated, userLogin } = authContext;
  // propiedades de la alerta
  let msg = "";
  let category = "";

  // En caso de que el password o usuario no exista
  useEffect(() => {
      if (authenticated) {
        props.history.push("/projects");
      }
      if (message) {
        //En caso de haber mensaje
        showAlert((msg = message.msg), (category = message.category));
      }
    },
    [message, authenticated, props.history]
  ); //dependencias a escuchar

  // State para iniciar sesión
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //extraemos email y password
  let { email, password } = user;
  // const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      // esto sirve para el email y el password
      [e.target.name]: e.target.value,
    });
  };

  // Manejo de onSubmit - iniciar sesión
  const onSubmit = (e) => {
    email ="asdf@asdf.es";
    password="asdfasdf";
    e.preventDefault();
    //validar que no haya campos vacíos
    if (email.trim() === "" || password.trim() === "") {
      //2.Si esto sucede, lLamo a la función showAlert y le paso los params
      showAlert(
        (msg = "Todos los campos son obligatorios"),
        (category = "alerta-error")
      );
      return;
    }
    //Pasarlo al action
    userLogin({ email, password });
  };

  return (
    <div className="form-usuario">
      {/* Mensaje de alerta en caso de error */}
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
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
