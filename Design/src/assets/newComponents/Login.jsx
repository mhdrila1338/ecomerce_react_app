import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbars from "./Navbar";
import Footer from "./footer";

const Login = () => {
  const [login, setLogin] = useState({});
  const navigation = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reactecomapi.onrender.com/auth/login", login)
      .then((response) => {
        console.log(response);
        localStorage.setItem("loginId", response.data.loginId);
        navigation("/mens");
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  };

  return (
    <>
      <Navbars />
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100"   style={{ background: "linear-gradient(to right,rgb(15, 34, 85),rgb(61, 139, 155),rgb(15, 34, 85))" }}>
        <Row className="w-100" style={{ maxWidth: "900px" }}>
          <Col lg={6} md={12} className="p-4" style={{ backgroundColor: "rgb(43, 40, 40)", borderRadius: "20px 0 0 20px"}}>
            <h3 className="text-white">Create an account</h3>
            <br></br>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Username" name="username" className="mb-3" onChange={handleChange} />
              </Form.Group>

              <Form.Group>
                <Form.Control type="password" placeholder="Enter your password" name="password" className="mb-3" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="I agree to the terms & conditions" className="text-white" />
              </Form.Group>

              <Button variant="primary" className="w-100" onClick={handleSubmit}>
                Submit
              </Button>

              <hr />

              <div className="d-flex justify-content-between">
                <Button variant="secondary" href="https://play.google.com/store">
                  Google
                </Button>
                <Button variant="secondary" href="https://www.apple.com/app-store/">
                  Apple
                </Button>
              </div>
            </Form>
          </Col>
          
          <Col lg={6} md={12} className="d-flex flex-column justify-content-between align-items-center p-4 text-white text-center"
            style={{
              backgroundImage: "url('https://universemagazine.com/wp-content/uploads/2022/08/zm4nfgq29yi91-1536x1536-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0 20px 20px 0",
              minHeight: "500px",
            }}>
            <div className="w-100 d-flex justify-content-between">
              <h3 style={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)" }}>ABC PVT LTD</h3>
              <Button variant="secondary" href="/">Back to Home</Button>
            </div>
            <div>
              <h4>Capturing Moments</h4>
              <h4>Creating Memories</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
