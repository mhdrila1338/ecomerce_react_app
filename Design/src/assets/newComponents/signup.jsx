import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./footer";

const Sign = () => {
  const [sign, setSign] = useState({});
  const navigation = useNavigate();

  const handleChange = (e) => {
    setSign({ ...sign, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://reactecomapi.onrender.com/auth/usersignup",sign).then((response) => {
        console.log(response);
        navigation("/login");
      })
      .catch((error) => {
        console.error("Signup Error:", error);
      });
    setSign({});
  };

  return (
    <>
     <Navbar />
    <Container fluid  style={{ background: "linear-gradient(to right,rgb(15, 34, 85),rgb(61, 139, 155),rgb(15, 34, 85))" }}>
      <h4 className="text-center mt-3">Sign Up</h4>
      <Container fluid className="p-4">
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center align-items-center text-white p-4"
            style={{
              backgroundImage: "url('https://i.imgur.com/TyMNedwg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              minHeight: "400px",
            }}
          >
            <h3 className="text-shadow">ABC PVT LMT</h3>
            <Button variant="secondary" href="/">
              Back to Home
            </Button>
            <h4>Capturing Moments</h4>
            <h4>Creating Memories</h4>
          </Col>

          <Col xs={12} md={6} className="p-4">
            <Container className="p-4 bg-dark text-white rounded">
              <h3>Create an account</h3>
              <h6>
                Already have an account? <a href="/Login">Log in</a>
              </h6>

              <form onSubmit={handleSubmit}>
                <Row className="mt-3">
                  <Col md={6}>
                    <input type="text" placeholder="Name" name="name" onChange={handleChange} className="form-control mb-3"  />
                  </Col>
                  <Col md={6}>
                    <input type="text" placeholder="Number" name="phone" onChange={handleChange} className="form-control mb-3" />
                  </Col>
                </Row>
                <input type="email" placeholder="Email" name="email" value={sign.email} onChange={handleChange} className="form-control mb-3" />

                <input type="text" placeholder="Username" name="username" value={sign.username} onChange={handleChange} className="form-control mb-3"/>

                <input type="password" placeholder="Enter your password" name="password" value={sign.password} onChange={handleChange} className="form-control mb-3" />
                
                <div className="mb-3">
                  <input type="checkbox" />{" "}
                  <span>
                    I agree to the <a href="#">terms & conditions</a>
                  </span>
                </div>

                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </form>

              <hr />

              <div className="d-flex justify-content-evenly">
                <Button variant="secondary" href="#">
                  Google
                </Button>
                <Button variant="secondary" href="#">
                  Apple
                </Button>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
      </Container>
    </>
  );
};

export default Sign;
