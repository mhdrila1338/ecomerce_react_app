import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import Navbars from "./Navbar";
import Footer from "./footer";
import { Button } from "react-bootstrap";

const Mens = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios.get("https://reactecomapi.onrender.com/prop/getall?category=mens")
      .then((response) => {
        console.log(response);
        setItem(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  

  const handleSubmit = (id) => {
    const prdId = id;
    const loginId = localStorage.getItem("loginId");
    axios.post("https://reactecomapi.onrender.com/cart/addtocart", {prdId, loginId})
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

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "left", padding: "20px" }}>
        {items.map((data) => (
          <Card key={data._id} style={{ width: "300px",textAlign:"center",margin:"25px"}}>  
            <Card.Body style={{padding:"0"}}>
            <img
                src={data.propimages?.[0] || "https://via.placeholder.com/400"}
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
              />
              <Card.Text style={{color:"red"}}><strong>Price: {data.propPrize}</strong></Card.Text>
              <Card.Title>Name: {data.propName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Type: {data.propType}</Card.Subtitle>
              <Card.Text>Discription: {data.propDescription}</Card.Text>
              <Button variant="primary"  className="mt-1 w-100" onClick={() => handleSubmit(data._id)}>add to cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Mens;
