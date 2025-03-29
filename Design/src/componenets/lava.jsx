import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navbars from "../assets/newComponents/Navbar";
import Second from "./SecondNav";

function Lava() {
  const lavaPhones = [
    {
      title: "Lava Blaze 5G",
      img: "https://www.lavamobiles.com/images/product/lava-blaze-5g.png",
      specs: "6.5-inch Display, Dimensity 810, 6GB RAM, 50MP Camera",
    },
    {
      title: "Lava Agni 2",
      img: "https://www.lavamobiles.com/images/product/lava-agni-2.png",
      specs: "6.78-inch AMOLED, Dimensity 7050, 8GB RAM, 50MP Quad Camera",
    },
    {
      title: "Lava Z3",
      img: "https://www.lavamobiles.com/images/product/lava-z3.png",
      specs: "6.5-inch LCD, MediaTek Helio G35, 3GB RAM, 13MP Dual Camera",
    },
    {
      title: "Lava X2",
      img: "https://www.lavamobiles.com/images/product/lava-x2.png",
      specs: "6.5-inch HD+, MediaTek Helio A25, 2GB RAM, 8MP Camera",
    },
  ];

  return (
    <>
      <Navbars />
      <hr />
      <Second />
      <hr />
      <Container fluid>
        <Row className="justify-content-center">
          {lavaPhones.map((phone, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm text-center">
                <Card.Img
                  variant="top"
                  src={phone.img}
                  className="img-fluid"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-5">{phone.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">{phone.specs}</Card.Text>
                  <Button variant="primary" className="w-100 mt-auto">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default Lava;
