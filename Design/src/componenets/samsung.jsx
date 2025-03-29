import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navbars from "../assets/newComponents/Navbar";
import Second from "./SecondNav";

function Samsung() {
  const samsungPhones = [
    {
      title: "Samsung Galaxy S7",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7.jpg",
      specs: "5.1-inch Display, Exynos 8890, 4GB RAM, 12MP Camera",
    },
    {
      title: "Samsung Galaxy S8",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
      specs: "5.8-inch Display, Exynos 8895, 4GB RAM, 12MP Camera",
    },
    {
      title: "Samsung Galaxy S9",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-.jpg",
      specs: "5.8-inch Display, Exynos 9810, 4GB RAM, 12MP Camera",
    },
    {
      title: "Samsung Galaxy S10",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10.jpg",
      specs: "6.1-inch AMOLED, Exynos 9820, 8GB RAM, 12MP Triple Camera",
    },
    {
      title: "Samsung Galaxy S20",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20.jpg",
      specs: "6.2-inch AMOLED, Exynos 990, 8GB RAM, 64MP Camera",
    },
    {
      title: "Samsung Galaxy S21",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21.jpg",
      specs: "6.2-inch AMOLED, Exynos 2100, 8GB RAM, 64MP Camera",
    },
    {
      title: "Samsung Galaxy S22",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg",
      specs: "6.1-inch AMOLED, Snapdragon 8 Gen 1, 8GB RAM, 50MP Camera",
    },
    {
      title: "Samsung Galaxy S23",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23.jpg",
      specs: "6.1-inch AMOLED, Snapdragon 8 Gen 2, 8GB RAM, 50MP Camera",
    },
    {
      title: "Samsung Galaxy S24",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24.jpg",
      specs: "6.2-inch AMOLED, Snapdragon 8 Gen 3, 12GB RAM, 50MP Camera",
    },
    {
      title: "Samsung Galaxy Z Fold 5",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5.jpg",
      specs: "7.6-inch AMOLED, Snapdragon 8 Gen 2, 12GB RAM, Foldable",
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
          {samsungPhones.map((phone, index) => (
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

export default Samsung;
