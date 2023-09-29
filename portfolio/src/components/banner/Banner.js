import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/port3.jpeg";
import image2 from "../../assets/port4.jpeg";
import "./Banner.css";
import { Box, Button, Container, Typography } from "@mui/material";
import UseAnimations from "react-useanimations";

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "5rem", height: "100vh" }}>
      <Slider {...settings}>
        <Box className="slide-container">
          <Box className="slide-content">
            <div className="slide-text">
              <Typography variant="body2" sx={{ color: "#ffbd38" }}>
                HELLO!
              </Typography>
              <Typography
                variant="h1"
                sx={{ color: "#fff", width: "90%", fontWeight: 600 }}
              >
                I'm <span style={{ color: "#ffbd38" }}>Ayodeji Ogunfowora</span>
              </Typography>
              <Typography variant="h5" sx={{ color: "#fff" }}>
                A Frontend Developer
              </Typography>
              <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                <Button
                  sx={{
                    bgcolor: "#ffbe22",
                    width: "15%",
                    color: "#000",
                    borderRadius: "20px",
                    padding: "0.5rem 1rem",
                    "&:hover": {
                      bgcolor: "orangered",
                    },
                  }}
                >
                  Hire
                </Button>

                <Button
                  sx={{
                    bgcolor: "transparent",
                    width: "15%",
                    color: "#fff",
                    border: "1px solid #fff",
                    borderRadius: "20px",
                    padding: "0.5rem 1rem",
                  }}
                >
                  My Works
                </Button>
              </div>
            </div>
            <img src={image1} alt="Image 1" />
          </Box>
        </Box>
        <Box className="slide-container">
          <Box className="slide-content">
            <div className="slide-text">
              <Typography variant="body2" sx={{ color: "#ffbd38" }}>
                HELLO!
              </Typography>
              <Typography
                variant="h1"
                sx={{ color: "#fff", width: "90%", fontWeight: 600 }}
              >
                I'm a <span style={{ color: "#ffbd38" }}>web developer</span>{" "}
                <span> based in Nigeria</span>
              </Typography>
              {/* <Typography variant="h5" sx={{ color: "#fff" }}>
                based in London
              </Typography> */}
              <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                <Button
                  //   component={Link}
                  //   to='/github.com/olumayokunayo'
                  sx={{
                    bgcolor: "#ffbd38",
                    width: "15%",
                    color: "#000",
                    borderRadius: "20px",
                    padding: "0.5rem 1rem",
                    "&:hover": {
                      bgcolor: "#ffbd38",
                    },
                  }}
                 
                >
                  Hire
                </Button>

                <Button
                  sx={{
                    bgcolor: "transparent",
                    width: "15%",
                    color: "#fff",
                    border: "1px solid #fff",
                    borderRadius: "20px",
                    padding: "0.5rem 1rem",
                  }}
                >
                  My Works
                </Button>
              </div>
            </div>
            <img src={image1} alt="Image 1" />
          </Box>
        </Box>
      </Slider>
    </Container>
  );
};

export default Banner;
