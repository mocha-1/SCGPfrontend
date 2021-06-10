
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './component/Signin'
import Signup from './component/Signup'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
