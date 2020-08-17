import React from 'react';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/nueva-cuenta" component={NewAccount}/>
        <Route exact path="/proyectos" component={Projects}/>
      </Switch>
    </Router>
  );
}

export default App;
