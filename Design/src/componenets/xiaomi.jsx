import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navbars from "../assets/newComponents/Navbar";
import Second from "./SecondNav";
import Footer from "../assets/newComponents/footer";

function Xiaomi() {
  const xiaomiPhones = [
    {
      title: "Xiaomi 14 Ultra",
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
      specs: "6.73-inch AMOLED, Snapdragon 8 Gen 3, 16GB RAM, 50MP Quad-Camera",
    },
    {
      title: "Xiaomi 14",
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg",
      specs: "6.36-inch AMOLED, Snapdragon 8 Gen 3, 12GB RAM, 50MP Dual-Camera",
    },
    {
      title: "Redmi Note 13 Pro+",
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus.jpg",
      specs: "6.67-inch AMOLED, Dimensity 7200 Ultra, 12GB RAM, 200MP Camera",
    },
    {
      title: "Redmi Note 12 Pro+",
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12-pro-plus-5g.jpg",
      specs: "6.67-inch AMOLED, Dimensity 1080, 8GB RAM, 200MP Camera",
    },
    {
      title: "POCO F5 Pro",
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-pro.jpg",
      specs: "6.67-inch AMOLED, Snapdragon 8+ Gen 1, 12GB RAM, 64MP Camera",
    },
    {
      title: "POCO X5 Pro",
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x5-pro-5g.jpg",
      specs: "6.67-inch AMOLED, Snapdragon 778G, 8GB RAM, 108MP Camera",
    },
    {
      title: "Xiaomi 13 Pro",
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-pro.jpg",
      specs: "6.73-inch AMOLED, Snapdragon 8 Gen 2, 12GB RAM, 50MP Camera",
    },
    {
      title: "Redmi K60 Ultra",
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k60-ultra.jpg",
      specs: "6.67-inch OLED, Dimensity 9200+, 16GB RAM, 50MP Camera",
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
          {xiaomiPhones.map((phone, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3}>
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

export default Xiaomi;
