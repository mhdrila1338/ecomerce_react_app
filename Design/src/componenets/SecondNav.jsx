import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const Second = () => {
  const navigate = useNavigate();
  
  const brands = [
    { 
      src: "https://logos-world.net/wp-content/uploads/2020/11/Samsung-Galaxy-Logo-2015-present.png", 
      path: "/samsung" 
    },
    { 
      src: "http://www.freepnglogos.com/uploads/iphone-logo-17.png", 
      path: "/" 
    },
    { 
      src: "https://tse4.mm.bing.net/th?id=OIP.jT9e4cQkvDPzVfp0q02dVgHaHa&pid=Api&P=0&h=180", 
      path: "/xiaomi" 
    },
    { 
      src: "https://tse2.mm.bing.net/th?id=OIP.v4I3hjF0xPWmgJLE85AjlQHaHa&pid=Api&P=0&h=180", 
      path: "/lava" 
    },
    { 
      src: "https://static.vecteezy.com/system/resources/previews/020/927/207/original/honor-brand-logo-phone-symbol-name-white-design-china-mobile-illustration-with-blue-background-free-vector.jpg", 
      path: "/honor" 
    },
    { 
      src: "https://zinggadget.com/wp-content/uploads/2022/03/Nothing-logo.jpg", 
      path: "/nothing" 
    },
    { 
      src: "https://tse1.mm.bing.net/th?id=OIP.mI_oYaphE2AwMPY0VsePfwHaHY&pid=Api&P=0&h=180", 
      path: "/vivo" 
    },
    { 
      src: "https://static.vecteezy.com/system/resources/previews/020/336/425/original/oppo-logo-oppo-icon-free-free-vector.jpg", 
      path: "/oppo" 
    },
    { 
      src: "https://logodix.com/logo/372813.png", 
      path: "/realme" 
    }
  ];

  // State to track selected image
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (brand) => {
    setSelectedImage(brand.src);
    navigate(brand.path);
  };

  return (
    <Container fluid>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {brands.map((brand, index) => (
          <div key={index} style={{ textAlign: "center", cursor: "pointer" }}>
            <img
              src={brand.src}
              alt={`Logo ${index + 1}`}
              style={{
                width: "80px",
                height: "auto",
                objectFit: "contain",
                transition: "all 0.3s ease",
              }}
              onClick={() => handleImageClick(brand)}
            />
          </div>
        ))}
      </div>

      {/* Display selected image below */}
      {selectedImage && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <img
            src={selectedImage}
            alt="Selected Brand"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      )}

      {/* Media Query inside JSX */}
      <style>
        {`
          @media (max-width: 768px) {
            div {
              gap: 10px;
            }
            img {
              width: 60px !important;
            }
          }
          @media (max-width: 480px) {
            img {
              width: 50px !important;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Second;
