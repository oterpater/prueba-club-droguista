import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Register from './pages/Register';
import Stores from './pages/Stores';
import Maps from './pages/Map';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/map" component={Maps} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
