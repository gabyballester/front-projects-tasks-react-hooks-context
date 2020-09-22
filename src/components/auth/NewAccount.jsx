import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/alertContext";

const NewAccount = (props) => {
  // Extraigo los valores del context (alert y showAlert)
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  // State para iniciar sesión
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  //extraemos propiedades de usuario
  const { name, email, password, confirm } = user;

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
      //2.Si esto sucede, creamos objeto de alerta con propiedades a pasar
      const alertObject = {
        msg: "Todos los campos son obligatorios", //Mensaje a mostrar
        category: "alerta-error", // clase a aplicar al elemento
      };
      //3. LLamo a la función showAlert y le paso el objeto
      showAlert(alertObject);
    }
    //Password length minimo 6
    // Passwords coinciden
    //Pasarlo al action
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
