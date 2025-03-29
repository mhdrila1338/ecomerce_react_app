import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navbars from "../assets/newComponents/Navbar";
import Second from "./SecondNav";
import Footer from "../assets/newComponents/footer";

function Honor() {
  const honorPhones = [
    {
      title: "Honor Magic5 Pro",
      img: "https://fdn2.gsmarena.com/vv/bigpic/honor-magic5-pro.jpg",
      specs: "6.81-inch AMOLED, Snapdragon 8 Gen 2, 12GB RAM, 50MP Triple Camera",
    },
    {
      title: "Honor 90",
      img: "https://fdn2.gsmarena.com/vv/bigpic/honor-90.jpg",
      specs: "6.7-inch AMOLED, Snapdragon 7 Gen 1, 12GB RAM, 200MP Camera",
    },
    {
      title: "Honor X9a",
      img: "https://fdn2.gsmarena.com/vv/bigpic/honor-x9a.jpg",
      specs: "6.67-inch AMOLED, Snapdragon 695, 8GB RAM, 64MP Camera",
    },
    {
      title: "Honor Magic Vs",
      img: "https://fdn2.gsmarena.com/vv/bigpic/honor-magic-vs.jpg",
      specs: "7.9-inch Foldable OLED, Snapdragon 8+ Gen 1, 12GB RAM, 54MP Camera",
    },
    {
      title: "Honor X7",
      img: "https://fdn2.gsmarena.com/vv/bigpic/honor-x7.jpg",
      specs: "6.74-inch LCD, Snapdragon 680, 4GB RAM, 48MP Dual Camera",
    },
    {
      title: "Honor 70",
      img: "https://fdn2.gsmarena.com/vv/bigpic/honor-70.jpg",
      specs: "6.67-inch OLED, Snapdragon 778G+, 8GB RAM, 54MP Dual Camera",
    },
    {
      title: "Honor Play 40",
      img: "https://fdn2.gsmarena.com/vv/bigpic/honor-play40.jpg",
      specs: "6.56-inch LCD, Snapdragon 480+, 6GB RAM, 13MP Camera",
    },
    {
      title: "Honor Magic4 Pro",
      img: "https://fdn2.gsmarena.com/vv/bigpic/honor-magic4-pro.jpg",
      specs: "6.81-inch LTPO OLED, Snapdragon 8 Gen 1, 8GB RAM, 50MP Triple Camera",
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
          {honorPhones.map((phone, index) => (
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

export default Honor;
