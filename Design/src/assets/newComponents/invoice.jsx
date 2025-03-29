import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Navbars from "./Navbar";

const Invoice = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedItems) {
      setCartItems(storedItems);
      setTotal(storedItems.reduce((sum, item) => sum + item.prdId.propPrize, 0));
    }
  }, []);

  return (
    <>
      <Navbars />
      <Container className="mt-4">
        <h2 style={{ textAlign: "center" }}>Invoice details</h2>
        <Card style={{width:"400px"}}>
          <Card.Body>
            <h4>Order Summary:</h4>
            {cartItems.map((item, index) => (
              <p key={index}>{item.prdId.propName} - ₹{item.prdId.propPrize} - {item.prdId.status}</p>
            ))}
            <h4>Total: ₹{total}</h4>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Invoice;
