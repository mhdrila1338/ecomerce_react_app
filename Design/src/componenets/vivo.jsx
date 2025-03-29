import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navbars from "../assets/newComponents/Navbar";
import Second from "./SecondNav";

function Vivo() {
  const vivoPhones = [
    {
      title: "Vivo X90 Pro",
      img: "https://www.vivo.com/images/product/vivo-x90-pro.png",
      specs: "6.78-inch AMOLED, Dimensity 9200, 12GB RAM, 50MP Camera",
    },
    {
      title: "Vivo V27",
      img: "https://www.vivo.com/images/product/vivo-v27.png",
      specs: "6.78-inch AMOLED, Dimensity 7200, 8GB RAM, 50MP Camera",
    },
    {
      title: "Vivo T1 5G",
      img: "https://www.vivo.com/images/product/vivo-t1.png",
      specs: "6.58-inch IPS LCD, Snapdragon 695, 4GB RAM, 50MP Camera",
    },
    {
      title: "Vivo Y100",
      img: "https://www.vivo.com/images/product/vivo-y100.png",
      specs: "6.38-inch AMOLED, Dimensity 900, 8GB RAM, 64MP Camera",
    },
    {
      title: "Vivo iQOO 11",
      img: "https://www.vivo.com/images/product/iqoo-11.png",
      specs: "6.78-inch AMOLED, Snapdragon 8 Gen 2, 16GB RAM, 50MP Camera",
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
          {vivoPhones.map((phone, index) => (
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

export default Vivo;
