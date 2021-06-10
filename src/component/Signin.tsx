import './Signin-up.css';
import { useReducer } from "react";
import { Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, 
  Switch,
  Route,
  Link } from "react-router-dom";

function Signin() {

  return (
      <>
      <Router>
        <header className="signinHeader">

          <div className="signin-card">
            <div className="form-label">
              <div className="signin-label">
                <h2> Sing In </h2>
              </div>

              <Form>
                <Form.Group controlId="formBasicEmail">
                <h5 style={{fontSize: 17}}>Email address</h5>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                <h5 style={{fontSize: 17}}>Password</h5>
                <Form.Control type="email" placeholder="Enter password" />
                </Form.Group>
                <br/>
                <Button variant="primary" size="sm" block>
                <h5>Sing In</h5>
                </Button>
              </Form>
              <br/>
              <div style={{textAlign: "center"}}>
                <p />Don't have an account? &nbsp;
                <Link to = "/signup">Sing up now</Link>
              </div>
            </div>
          </div>
        </header>
        
        </Router>
      </>
  );
}

export default Signin;
