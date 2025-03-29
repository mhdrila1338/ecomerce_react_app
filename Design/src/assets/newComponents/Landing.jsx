import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Footer from "./footer";
import Navbars from "./Navbar";

const Landing = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("https://reactecomapi.onrender.com/prop/getall")
      .then((response) => {
        console.log(response.data.data);
        setItem(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = (id) => {
    const prdId = id;
    const loginId = localStorage.getItem("loginId");
    axios.post("https://reactecomapi.onrender.com/cart/addtocart", { prdId, loginId })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  return (
    <>
      <Navbars />
      <Container fluid   className="mt-4">
        <Row>
          {item.map((data) => (
            <Col key={data._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card style={{ width: "300px",margin:"25px"}}>
                <Card.Body style={{padding:"0",textAlign:"center"}}>
                <img src={data.propimages}
                    alt={data.propName}
                    className="img-fluid"
                  />
                  <Card.Title style={{color:"red"}}>Price: {data.propPrize}</Card.Title>
                  <Card.Title>Discription: {data.propDescription}</Card.Title>
                  <Card.Title>Name: {data.propName}</Card.Title>
                  <Card.Title>Type: {data.propType}</Card.Title>
                  <Button variant="primary" className="mt-2  w-100" onClick={() => handleSubmit(data._id)} style={{borderRadius:"10px",height:"50px"}}>
                    Add to Cart
                  </Button>
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

export default Landing;
