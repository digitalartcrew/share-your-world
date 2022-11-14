import React, { useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import axios from 'axios'
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import { useNavigate } from "react-router-dom";

interface SignUpData {
  username?: string,
  email?: string,
  phone?: number,
  password?: string, 
  rpassword?: string
}

interface LoginData {
  username?: string,
  email?: string,
  phone?: number,
  password?: string, 
}

export const LandingPage = () => {
  const navigate = useNavigate();
  const [isReadyToLogin, setIsReadyToLogin] = useState(true); 
  const toggleForm = () => {
    setIsReadyToLogin(!isReadyToLogin);
  }

  const signUp = (signUpData: SignUpData) => {
    const {username, email, phone, password, rpassword} = signUpData;

    if(password !== rpassword){
      return
    }

    debugger;
    axios.post('/api/signup', { username, email, phone, password }).then(function (response) {
      console.log(response);
      navigate("/dashboard");
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const loginIn = (loginData: LoginData) => {
    const {username, email, phone, password, rpassword} = loginData;

    axios.post('/api/signup', { username, email, phone, password }).then(function (response) {
      console.log(response);
      navigate("/dashboard");
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <Image
            src={
              "https://st4.depositphotos.com/1010613/41685/i/450/depositphotos_416857592-stock-photo-gps-location-search-map-online.jpg"
            }
            alt="UserName profile image"
            style={{ width: "80%", marginTop: "2rem" }}
          />
          <h5 style={{ marginTop: "1rem" }}>Share Your World</h5>
        </Col>
        <Col>
          <Container>
            {isReadyToLogin ? <LoginForm onSubmit={loginIn} /> : <SignUpForm onSubmit={signUp} />}
            {isReadyToLogin ?<p>Need to create an account? Click <Button className="" onClick={toggleForm}>Sign Up Now</Button></p> : <p>Already have an account? Click here to <Button className="" onClick={toggleForm}>Log in</Button></p>}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
