import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import Error404 from './components/layout/Error404.jsx';
//importación de states
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import tokenAuth from './config/token';
//importo el Higuer Order Component
import PrivateRoute from './components/routes/PrivateRoute';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
console.log('app.js revisando si tiene token??');
if(token){
  console.log('app.js tiene token y lo envía a los headers!!');
  console.log(token);
  tokenAuth(token);
}

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/new-account" component={NewAccount} />
              <PrivateRoute exact path="/projects" component={Projects} />
              <Route exact path="*" component={Error404} />
            </Switch>
          </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
