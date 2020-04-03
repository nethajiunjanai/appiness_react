import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './styleSheets/App.scss';
import Login from './containers/login';
import Dashboard from './containers/dashboard';

const App =()=>{
  return(<Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </Router>
  )
};

export default App;
