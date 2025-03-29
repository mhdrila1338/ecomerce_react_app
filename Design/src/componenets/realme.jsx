import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navbars from "../assets/newComponents/Navbar";
import Second from "./SecondNav";

function Realme() {
  const realmePhones = [
    {
      title: "Realme GT3",
      img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-gt3-1.jpg",
      specs: "6.74-inch AMOLED, Snapdragon 8+ Gen 1, 16GB RAM, 50MP Camera",
    },
    {
      title: "Realme 11 Pro+",
      img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-11-pro-plus-1.jpg",
      specs: "6.7-inch AMOLED, Dimensity 7050, 12GB RAM, 200MP Camera",
    },
    {
      title: "Realme 10 Pro+",
      img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-10-pro-plus-1.jpg",
      specs: "6.7-inch AMOLED, Dimensity 1080, 12GB RAM, 108MP Camera",
    },
    {
      title: "Realme 9 Pro+",
      img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-9-pro-plus-1.jpg",
      specs: "6.4-inch AMOLED, Dimensity 920, 8GB RAM, 50MP Camera",
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
          {realmePhones.map((phone, index) => (
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
                  <Card.Text className="text-muted flex-grow-1">
                    {phone.specs}
                  </Card.Text>
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

export default Realme;
