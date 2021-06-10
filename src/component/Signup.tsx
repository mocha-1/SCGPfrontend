import './Signin-up.css';
import { useReducer } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, 
  Switch,
  Route,
  Link } from "react-router-dom";

function Signup() {
  return (
      <>
      <Router>
        <header className="signinHeader">
          <div className="signup-card">
            <div className="form-label">
              <div className="signin-label">
              <h2> Sing Up </h2>
              </div>

              <Form>
                <div className="form-signup-container">
                <Row>
                  <Col > 
                    <h5 style={{fontSize: 17}}>First name</h5>
                  </Col>
                  &nbsp;&nbsp;
                  <Col > 
                    <h5 style={{fontSize: 17}}>Last name</h5>
                  </Col>
                </Row>
                <Form.Group as={Row} controlId="formPlaintextfirst-last">
                  <Col >
                      <Form.Control 
                      type="firstName" placeholder="Enter firstname.." />
                  </Col>
                  &nbsp;&nbsp;
                  <Col >
                      <Form.Control 
                      type="lastName" placeholder="Enter lastname.." />
                  </Col>
                </Form.Group>
                <Row>
                  <Col > 
                    <h5 style={{fontSize: 17}}>Email</h5>
                  </Col>
                  &nbsp;&nbsp;
                  <Col > 
                    <h5 style={{fontSize: 17}}>Phone Number</h5>
                  </Col>
                </Row>
                <Form.Group as={Row} controlId="formPlaintextfirst-last">
                  <Col >
                      <Form.Control 
                      type="firstName" placeholder="Enter email.." />
                  </Col>
                  &nbsp;&nbsp;
                  <Col >
                      <Form.Control 
                      type="lastName" placeholder="Enter phone number.." />
                  </Col>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                  <h5 style={{fontSize: 17}}>Password</h5>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <h5 style={{fontSize: 17}}>Confirm Password</h5>
                <Form.Control type="confirm-password" placeholder="Enter confirm password" />
                </Form.Group>
                <br/>

                <Button variant="primary" size="sm" block>
                  <h5>Sing Up</h5>
                </Button>
                  <div style={{marginTop: 5, textAlign: "center"}}> 
                  Have an account? &nbsp;
                  <Link to = "/signin">Sing in now</Link>
                  </div>
                </div>
              </Form>
              
              
            </div>
          </div>

        </header>
        
      </Router>
      </>
  );
}

export default Signup;
