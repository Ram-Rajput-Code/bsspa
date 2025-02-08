// //src/MyComponents/homePage/homeComponents/HomeSlider.jsx

import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const images = [
  { src: "/images/sliderimg3.jpg", alt: "Slide 1" },
  { src: "/images/sliderimg2.jpg", alt: "Slide 2" },
  { src: "/images/sliderimg1.png", alt: "Slide 3" },
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box sx={{
      position: "relative",
      width: "100%",
     
      margin: "auto",
      overflow: "hidden",
    
      boxShadow: 3,
    }}>
      <Box sx={{
        display: "flex",
        transition: "transform 0.9s ease-in-out",
        transform: `translateX(-${currentIndex * 100}%)`,
      }}>
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image.src}
            alt={image.alt}
            sx={{
              width: "100%",
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
        ))}
      </Box>
      <IconButton onClick={prevSlide} sx={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        '&:hover': { backgroundColor: "rgba(0,0,0,0.7)" }
      }}>
        <ArrowBackIos />
      </IconButton>
      <IconButton onClick={nextSlide} sx={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        '&:hover': { backgroundColor: "rgba(0,0,0,0.7)" }
      }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default HomeSlider;
