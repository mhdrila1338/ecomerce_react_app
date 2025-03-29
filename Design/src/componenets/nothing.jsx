import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navbars from "../assets/newComponents/Navbar";
import Second from "./SecondNav";

function Nothing() {
  const nothingPhones = [
    {
      title: "Nothing Phone (1)",
      img: "https://cdn.shopify.com/s/files/1/0571/4124/8375/products/phone1-1_720x.jpg?v=1625646789",
      specs: "6.55-inch AMOLED, Snapdragon 778G+, 8/12GB RAM, 50MP Dual Camera",
      link: "https://www.gsmarena.com/nothing_phone_(1)-11636.php",
    },
    {
      title: "Nothing Phone (2)",
      img: "https://cdn.shopify.com/s/files/1/0571/4124/8375/products/phone2-1_720x.jpg?v=1688456789",
      specs: "6.7-inch LTPO AMOLED, Snapdragon 8+ Gen 1, 8/12GB RAM, 50MP Dual Camera",
      link: "https://www.gsmarena.com/nothing_phone_(2)-12386.php",
    },
    {
      title: "Nothing Phone (3a)",
      img: "https://cdn.shopify.com/s/files/1/0571/4124/8375/products/phone3a-1_720x.jpg?v=1691234567",
      specs: "6.77-inch AMOLED, Snapdragon 7s Gen 3, 12GB RAM, 50MP Triple Camera",
      link: "https://www.gsmarena.com/nothing_phone_(3a)-12745.php",
    },
    {
      title: "Nothing Phone (3a) Pro",
      img: "https://cdn.shopify.com/s/files/1/0571/4124/8375/products/phone3apro-1_720x.jpg?v=1691234568",
      specs: "6.77-inch AMOLED, Snapdragon 7s Gen 3, 12GB RAM, 50MP Triple Camera with 3x Optical Zoom",
      link: "https://www.gsmarena.com/nothing_phone_(3a)_pro-12746.php",
    },
    {
      title: "Nothing Phone (2a)",
      img: "https://cdn.shopify.com/s/files/1/0571/4124/8375/products/phone2a-1_720x.jpg?v=1691234569",
      specs: "6.7-inch AMOLED, MediaTek Dimensity 7200 Pro, 12GB RAM, 50MP Dual Camera",
      link: "https://www.gsmarena.com/nothing_phone_(2a)-12747.php",
    },
    {
      title: "CMF Phone (1)",
      img: "https://cdn.shopify.com/s/files/1/0571/4124/8375/products/cmfphone1-1_720x.jpg?v=1691234570",
      specs: "6.67-inch Super AMOLED, MediaTek Dimensity 7300, 8GB RAM, 50MP Camera",
      link: "https://www.gsmarena.com/cmf_phone_(1)-12748.php",
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
          {nothingPhones.map((phone, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm text-center">
                <Card.Img
                  variant="top"
                  src={phone.img}
                  className="img-fluid"
                  style={{ height: "200px", objectFit: "contain" }}
                  alt={phone.title}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-5">{phone.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {phone.specs}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="w-100 mt-auto"
                    href={phone.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
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

export default Nothing;
