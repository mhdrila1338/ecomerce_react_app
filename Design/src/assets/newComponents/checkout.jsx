import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Navbars from "./Navbar";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    city: "",
    zip: "",
    number: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedItems) {
      setCartItems(storedItems);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!formData.addressLine1) {
      alert("Please enter a delivery address.");
      return;
    }

    const loginId = localStorage.getItem("loginId");
    if (!loginId) {
      alert("User not logged in!");
      return;
    }

    const orderData = {
      loginId,
      address: `${formData.addressLine1}, ${formData.addressLine2}, ${formData.city}, ${formData.state} - ${formData.zip}`,
      products: cartItems.map((item) => item.prdId._id),
    };

    axios.post("https://reactecomapi.onrender.com/order/checkout", orderData)
      .then((response) => {
        console.log("Order placed:", response.data);
        alert("Order successfully placed!");
        localStorage.removeItem("cartItems");
        navigate("/invoice");
      })
      .catch((error) => {
        console.error("Checkout error:", error);
      });
  };

  return (
    <>
      <Navbars />
      <Container className="mt-4">
        <h2 className="text-center">Checkout</h2>
        
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" name="fullName" value={formData.fullName} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" name="addressLine1" value={formData.addressLine1} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="text" placeholder="Enter additional address details" name="addressLine2" value={formData.addressLine2} onChange={handleInputChange} />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>State/Province/Region</Form.Label>
                <Form.Control type="text" placeholder="Enter your state" name="state" value={formData.state} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter your city" name="city" value={formData.city} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Enter your zip code" name="zip" value={formData.zip} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your number" name="number" value={formData.number} onChange={handleInputChange} />
              </Form.Group>
            </Col>
          </Row>

          <Button className="mt-3 w-100" onClick={handleCheckout}>Confirm Order</Button>
        </Form>

        <h3 className="mt-4 text-center">Order Summary</h3>
        <Row className="justify-content-center">
          {cartItems.map((item, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <img src={item.prdId.propimages} alt="Product" className="w-100" />
                  <Card.Title>{item.prdId.propName}</Card.Title>
                  <Card.Text>Price: ₹{item.prdId.propPrize}</Card.Text>
                  <Card.Text>Type: {item.prdId.propType}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
