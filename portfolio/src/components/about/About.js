import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import image1 from "../../assets/port3.jpeg";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";

const About = () => {
  return (
    <>
      <Container maxWidth="lg" id="about" sx={{ marginTop: "4rem" }}>
        <Container>
          <div
            style={{
              display: "flex",
              gap: "6rem",
            }}
          >
            <Box>
              <img src={image1} alt="" style={{ height: "600px" }} />
            </Box>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  width: "50%",
                  fontWeight: 600,
                  position: "relative",
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: "#1a1a1a",
                  marginTop: "-3.5rem",
                  position: "relative",
                  fontWeight: 600,
                  letterSpacing: ".1rem",
                  zIndex: -1,
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  color: "#999999",
                  position: "relative",
                  marginTop: "-1.8rem",
                }}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <Box>
                <Box
                  sx={{
                    marginTop: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3rem",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Name:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      Ayodeji Ogunfowora
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3rem",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Date of birth:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      February 04, 1998
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3rem",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Address:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      Jericho Ib, OY NG
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3rem",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Zip code:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      200272
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3rem",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Email:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      olumayokunayo@gmail.com
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3rem",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Phone:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      +2349038001805
                    </span>
                  </div>
                </Box>
                <Button
                  sx={{
                    bgcolor: "#ffbd38",
                    "&:hover": { bgcolor: "#ffbd38" },
                    borderRadius: "20px",
                    color: "#000",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                    padding: "0.5rem 1.5rem",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <UseAnimations animation={github} size={30} color="#fff" />
                  <span style={{ textTransform: "none" }}>GitHub</span>
                </Button>
              </Box>
            </Box>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default About;
