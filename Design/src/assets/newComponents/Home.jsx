import React from "react";
import { Card, Button, Container, Row, Col, Carousel } from "react-bootstrap";
import Navbars from "./Navbar";
import Footer from "./footer";
import "animate.css";

function Home() {
  const Men=[
    {
    img:"https://i.pinimg.com/originals/56/b7/83/56b7839246676993bbed5279dd0cc3fa.png",
    price:"₹888",
    },
    {
      img:"https://usercontent1.hubstatic.com/12708030_f496.jpg",
      price:"₹1999",
    },
    {
      img:"https://i.pinimg.com/originals/3a/b3/cc/3ab3cc566e15a50c2a7f579fc1e64507.jpg",
      price:"₹1254",
    },
    {
      img:"https://www.thefashionisto.com/wp-content/uploads/2023/01/Todd-Snyder-Collection-Spring-Summer-2023-Loose-Silhouette-Men.jpg",
      price:"₹745",
    },
    {
      img:"https://www.fashionbeans.com/wp-content/uploads/2023/04/plug__official_manwearingabaggyflarejeans.jpg",
      price:"₹699",
    },
  ]
  const Women=[
    {
    img:"https://i.pinimg.com/originals/56/b7/83/56b7839246676993bbed5279dd0cc3fa.png",
    price:"₹888",
    },
    {
      img:"https://usercontent1.hubstatic.com/12708030_f496.jpg",
      price:"₹1999",
    },
    {
      img:"https://i.pinimg.com/originals/3a/b3/cc/3ab3cc566e15a50c2a7f579fc1e64507.jpg",
      price:"₹1254",
    },
    {
      img:"https://www.thefashionisto.com/wp-content/uploads/2023/01/Todd-Snyder-Collection-Spring-Summer-2023-Loose-Silhouette-Men.jpg",
      price:"₹745",
    },
    {
      img:"https://www.fashionbeans.com/wp-content/uploads/2023/04/plug__official_manwearingabaggyflarejeans.jpg",
      price:"₹699",
    },
    
]
  return (
    
    <Container fluid style={{ backgroundColor: "beige" }}>
      <Navbars />
      <Carousel fade className="mt-4">
        <Carousel.Item>
          <Row className="align-items-center text-center">
            <Col xs={12} md={6}>
              <h1>MEN'S FASHION</h1>
              <h3>Min 35-75% Off</h3>
              <Button variant="primary" className="m-2" href="/mens">Shop Now</Button>
              <Button variant="secondary" className="m-2">Read More</Button>
            </Col>
            <Col xs={12} md={6}>
              <img
                src="https://images.alphacoders.com/957/957128.jpg"
                alt="Men's Fashion"
                className="img-fluid animate__animated animate__fadeInRight"
                style={{ maxHeight: "70vh" }}
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="align-items-center text-center">
            <Col xs={12} md={6}>
              <h1>WOMEN'S FASHION</h1>
              <h3>Min 40-80% Off</h3>
              <Button variant="primary" className="m-2" href="/women">Shop Now</Button>
              <Button variant="secondary" className="m-2">Read More</Button>
            </Col>
            <Col xs={12} md={6}>
              <img
                src="https://wallpaperaccess.com/full/318707.jpg"
                alt="Women's Fashion"
                className="img-fluid animate__animated animate__fadeInRight"
                style={{ maxHeight: "70vh" }}
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      
      <hr />
      
<h1 className="text-center my-4">Men's Fashion</h1>
    <Row className="justify-content-center">
      {[
        "https://i.pinimg.com/originals/56/b7/83/56b7839246676993bbed5279dd0cc3fa.png",
        "https://usercontent1.hubstatic.com/12708030_f496.jpg",
        "https://i.pinimg.com/originals/3a/b3/cc/3ab3cc566e15a50c2a7f579fc1e64507.jpg",
        "https://www.thefashionisto.com/wp-content/uploads/2023/01/Todd-Snyder-Collection-Spring-Summer-2023-Loose-Silhouette-Men.jpg",
        "https://www.fashionbeans.com/wp-content/uploads/2023/04/plug__official_manwearingabaggyflarejeans.jpg",]
        .map((img, index) => (  
        <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-3">
          <Card style={{height:"100%"}}>
            <Card.Img variant="top" src={img} className="img-fluid" style={{height:"100%"}} />
            Price:$999
            <Button className="btn btn-primary mt-2">Buy Now</Button>
          </Card>
        </Col>
      ))}
    </Row>

      <hr />
<h1 className="text-center my-4">Women's Fashion</h1>
<Row className="justify-content-center">
  {Women.map((img, index) => (
    <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-3">
      <Card style={{height:"100%"}}>
        <Card.Img variant="top" src={img} className="img-fluid"style={{height:"100%"}}/>
        <Button className="btn btn-secondary mt-2">Buy Now</Button>
      </Card>
    </Col>
  ))}
</Row>


      <Footer />
    </Container>
  );
}

export default Home;