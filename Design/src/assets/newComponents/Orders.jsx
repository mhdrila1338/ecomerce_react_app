import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Navbars from "./Navbar";
import Footer from "./footer";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const loginId = localStorage.getItem("loginId");

  useEffect(() => {
    fetchOrders();
  }, [loginId]);

  const fetchOrders = () => {
    axios
      .get(`https://reactecomapi.onrender.com/order/userorders/${loginId}`)
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  };

  const Remove = (id) => {
    const orderId = id;
    console.log(orderId);

    axios
      .delete(`https://reactecomapi.onrender.com/order/deleteorder/${orderId}`)
      .then((response) => {
        console.log(response);
        const filtered = orders.filter((data) => {
          return data._id !== id;
        });
        setOrders(filtered);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const RemoveAll = (ide) => {
    console.log(ide)
    axios
      .delete(`https://reactecomapi.onrender.com/order/clearorders/${loginId}`)
      .then((response) => {
        console.log("All orders removed", response);
        setOrders([]);
      })
      .catch((error) => {
        console.error("Error clearing orders:", error);
      });
  };

  return (
    <>
      <Navbars />
      <Container className="mt-4">
        <h2 className="text-center">My Orders</h2>
        {orders.length === 0 ? (
          <p className="text-center">No orders found.</p>
        ) : (
          <Row>
            {orders.map((order) => (
              <Col sm={12} md={6} lg={4} className="mb-3" key={order._id}>
                <Card style={{ width: "300px" }}>
                  <Card.Body>
                    <img src={order.prdId.propimages} alt="Product" />
                    <Card.Title>Order ID: {order._id}</Card.Title>
                    <Card.Text>
                      <strong>Address:</strong> {order.address}
                    </Card.Text>
                    <Card.Text>
                      <strong>Products:</strong>
                    </Card.Text>
                    <Button variant="primary" onClick={() => Remove(order._id)}>
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        <Button variant="danger" onClick={RemoveAll}>
          Remove All
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default UserOrders;