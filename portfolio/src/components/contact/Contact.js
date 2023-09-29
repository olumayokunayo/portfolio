import { Box, Container } from "@mui/material";
import React from "react";
import image1 from "../../assets/port3.jpeg";
const Contact = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
        <Container>
          <Box sx={{ bgcolor: "#1a1a1a" }}>
            <img src={image1} alt="" style={{ maxWidth: "50%" }} />
          </Box>
          <Box>
            
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
