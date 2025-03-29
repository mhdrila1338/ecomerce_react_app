import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navbars from "../assets/newComponents/Navbar";
import Second from "./SecondNav";

function Oppo() {
  const oppoPhones = [
    {
      title: "Oppo Find X5 Pro",
      img: "https://example.com/oppo-find-x5-pro.png",
      specs: "6.7-inch AMOLED, Snapdragon 8 Gen 1, 12GB RAM, 50MP Triple Camera",
    },
    {
      title: "Oppo Reno 8 Pro",
      img: "https://example.com/oppo-reno8-pro.png",
      specs: "6.7-inch AMOLED, Dimensity 8100-Max, 12GB RAM, 50MP Camera",
    },
    {
      title: "Oppo A78",
      img: "https://example.com/oppo-a78.png",
      specs: "6.56-inch LCD, MediaTek Helio G35, 4GB RAM, 50MP Camera",
    },
    {
      title: "Oppo F21 Pro",
      img: "https://example.com/oppo-f21-pro.png",
      specs: "6.43-inch AMOLED, Snapdragon 680, 8GB RAM, 64MP Camera",
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
          {oppoPhones.map((phone, index) => (
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

export default Oppo;
