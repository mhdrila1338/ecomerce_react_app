import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Footer from "./footer";
import Navbars from "./Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();  // Initialize navigation

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    if (!loginId) {
      console.error("No loginId found!");
      return;
    }

    axios
      .get(`https://reactecomapi.onrender.com/cart/getcart/${loginId}`)
      .then((response) => {
        console.log("API Response:", response.data);
        if (response.data && response.data.data) {
          setCartItems(response.data.data);
        } else {
          console.error("Invalid API response format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  }, []);

  const handlePlaceOrder = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate("/checkout");
  };

  return (
    <>
      <Navbars />
      <div>
      <div style={{paddingTop:"5%"}}>
      <h2 style={{ textAlign: "center", margin: "20px" }}>My Cart</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", margin: "20px" }}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            const product = item.prdId;
            return (
              <Card key={index} style={{ width: "300px" }}>
                <Card.Body>
                  <img src={product.propimages[0]} style={{ width: "100%" }} />
                  <Card.Title>Name: {product.propName }</Card.Title>
                  <Card.Text>Description: {product.propDescription }</Card.Text>
                  <Card.Text>Price: ₹{product.propPrize }</Card.Text>
                  <Card.Text>Type: {product.propType}</Card.Text>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <h4>No items in cart</h4>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" onClick={handlePlaceOrder}>PLACE ORDER</Button>
      </div>
      <div style={{position:"fixed",width:"100%"}}>
      </div>
      <Footer/>
      </div>
      </div>
    </>
  );
};

export default Cart;
  