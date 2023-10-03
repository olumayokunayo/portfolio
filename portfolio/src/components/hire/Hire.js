import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import image1 from "../../assets/port3.jpeg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const Hire = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const serviceId = process.env.REACT_APP_SERVICEID;
  const templateId = process.env.REACT_APP_TEMPLATEID;
  const publicKey = process.env.REACT_APP_EMAILJS_PK;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setIsLoading(false);
        navigate("/");
        console.log(result.text);
      },
      (error) => {
        setIsLoading(false);
        console.log(error.text);
      }
    );
    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      {isLoading && <Loader />}
      <Container
        maxWidth="md"
        sx={{
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Container>
          <Container
            sx={{
              display: isSmallScreen ? "" : "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <img
              src={image1}
              alt=""
              style={{
                height: "500px",
              }}
            />
            <form onSubmit={handleSubmit} ref={form}>
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "1rem",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Hire Me
              </Typography>
              <TextField
                sx={{ bgcolor: "#e7f0fe", outline: "none", fontSize: "2rem" }}
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name*"
              />
              <TextField
                sx={{ bgcolor: "#e7f0fe" }}
                fullWidth
                margin="normal"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email*"
              />
              <TextField
                sx={{ bgcolor: "#e7f0fe" }}
                fullWidth
                multiline
                rows={4}
                margin="normal"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message*"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem", marginLeft: "35%" }}
              >
                Submit
              </Button>
            </form>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Hire;
