import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  // extraemos authenticated y la función de envío usuario de storage a headers
  const { authenticated, loading, getAuthUserFromLocalStorage } = authContext;

  useEffect(() => {
    getAuthUserFromLocalStorage();
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && !loading ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default PrivateRoute;
