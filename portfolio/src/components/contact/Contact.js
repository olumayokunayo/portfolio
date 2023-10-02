import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import image1 from "../../assets/port3.jpeg";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/Config";

const Freelance = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const iconStyle = {
    fontSize: "3rem",
    color: "#ffbd38",
  };
  const iconStyleDiv = {
    height: "6rem",
    width: "6rem",
    borderRadius: "50%",
    backgroundColor: " #1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    const { name, email, subject, message } = data;
    console.log(name, email, subject, message);

    const contactsCollections = await addDoc(collection(db, "contacts"), {
      name,
      email,
      subject,
      message,
    });
    console.log("Document written with ID: ", contactsCollections.id);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20rem",
        }}
        id="contact"
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "#fff",
              fontWeight: 600,
              position: "relative",
            }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              color: "#1a1a1a",
              marginTop: "-3.5rem",
              position: "relative",
              fontWeight: 600,
              letterSpacing: ".1rem",
              zIndex: -1,
            }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              width: "80%",
              margin: "auto",
              color: "#999999",
              position: "relative",
              marginTop: "-1.8rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ marginTop: "2rem", marginLeft: "4rem" }}
          >
            <Grid item xs={3}>
              <Box>
                <div style={iconStyleDiv}>
                  <MdOutlineLocationOn style={iconStyle} />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", marginTop: "2rem" }}
                  >
                    ADDRESS
                  </Typography>
                  <Typography
                    sx={{
                      color: "#ffff",
                      marginTop: "2rem",
                    }}
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet
                  </Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <div style={iconStyleDiv}>
                  <MdCall style={iconStyle} />
                </div>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", marginTop: "2rem" }}
                >
                  CONTACT NUMBER
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#ffff", marginTop: "2rem" }}
                >
                  +2349038001805
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <div style={iconStyleDiv}>
                  <SiMinutemailer style={iconStyle} />
                </div>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", marginTop: "2rem" }}
                >
                  EMAIL ADDRESS
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#ffff", marginTop: "2rem" }}
                >
                  olumayokunayo@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <div style={iconStyleDiv}>
                  <TbWorldWww style={iconStyle} />
                </div>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", marginTop: "2rem" }}
                >
                  WEBSITE
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#ffff", marginTop: "2rem" }}
                >
                  myportfolio.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", marginTop: "5rem", marginLeft: "4rem" }}
          >
            <Box sx={{}}>
              <img
                src={image1}
                alt=""
                style={{ width: "100%", height: "600px" }}
              />
            </Box>
            <Box
              sx={{
                marginTop: "1rem",
                bgcolor: "#f8f9fa",
                padding: "2rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                width: "50%",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                style={{ width: "100%", height: "3rem", padding: "0.5rem" }}
                name="name"
                value={data.name}
                onChange={(e) => handleInputChange(e)}
              />
              <input
                type="email"
                placeholder="Your Email"
                style={{ width: "100%", height: "3rem", padding: "0.5rem" }}
                name="email"
                value={data.email}
                onChange={(e) => handleInputChange(e)}
              />
              <input
                type="text"
                placeholder="Subject"
                style={{ width: "100%", height: "3rem", padding: "0.5rem" }}
                name="subject"
                value={data.subject}
                onChange={(e) => handleInputChange(e)}
              />
              <textarea
                rows={8}
                style={{ width: "100%", padding: "0.5rem" }}
                placeholder="Message"
                name="message"
                value={data.message}
                onChange={(e) => handleInputChange(e)}
              ></textarea>
              <Button
                sx={{
                  bgcolor: "#ffbe22",
                  width: "100%",
                  color: "#000",
                  borderRadius: "20px",
                  padding: "0.5rem 2rem",
                  "&:hover": {
                    bgcolor: "orangered",
                  },
                }}
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </Box>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Freelance;
