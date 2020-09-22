import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/authentication/authContext";

const NewAccount = (props) => {
  // Extraigo los valores de los context
  // alert
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  // auth
  const authContext = useContext(AuthContext);
  const { message, authenticated, registerUser } = authContext;
  // propiedades de la alerta
  let msg = "";
  let category = "";

  // En caso de usuario duplicado, creado o autenticado
  useEffect(() => {
    if (authenticated) {
      props.history.push("/projects");
    }
    if (message) {
      //En caso de haber mensaje
      showAlert(
        (msg = message.msg),
        (category = message.category)
      );
    }
  }, [message, authenticated, props.history]); //dependencias a escuchar

  // State para iniciar sesión
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  //extraemos propiedades de usuario
  let { name, email, password, confirm } = user;

  //esto lo borro luego
  name = "asdf";
  email = "asdf@asdf.es";
  password = "asdfasdf";
  confirm = "asdfasdf";

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
    //1.Validar que no haya campos vacíos
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      //2.Si esto sucede, lLamo a la función showAlert y le paso los params
      showAlert(
        (msg = "Todos los campos son obligatorios"),
        (category = "alerta-error")
      );
      return;
    }

    // 3. Password length minimo 6
    if (password.length < 6) {
      showAlert(
        (msg = "Longitud password mínimo 6 caracteres"),
        (category = "alerta-error")
      );
      return;
    }

    // 4. Passwords coinciden
    if (password !== confirm) {
      showAlert((msg = "Passwords no coinciden"), (category = "alerta-error"));
      return;
    }

    //5. Pasarlo al action para registrar
    const newUser = {
      //en back es nombre no name
      nombre: name,
      email,
      password,
    };
    registerUser(newUser);
  };

  return (
    <div className="form-usuario">
      {/* Mensaje de alerta */}
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <div className="container-form sombra-dark">
        <h1>Obtener cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu Nombre"
              value={name}
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
            <label htmlFor="confirm">Confirmar Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repite tu Password"
              value={confirm}
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
