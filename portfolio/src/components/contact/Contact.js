import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import image1 from "../../assets/port3.jpeg";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/Config";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Loader from "../loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const Freelance = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const iconStyle = {
    fontSize: isSmallScreen ? "2rem" : "3rem",
    color: "#ffbd38",
  };
  const iconStyleDiv = {
    height: isSmallScreen ? "4rem" : "6rem",
    width: isSmallScreen ? "4rem" : "6rem",
    borderRadius: "50%",
    backgroundColor: " #1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const serviceId = "service_v78l3rn";
  const templateId = "template_4c2edzt";
  const publicKey = "RWbaj4x6DdJZqnjHi";

  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    const { name, email, subject, message } = data;
    if (!name || !email || !message) {
      return;
    } else {
      setisLoading(true);
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          setisLoading(false);
          toast.success("Message is being delivered");
          console.log(result.text);
        },
        (error) => {
          setisLoading(false);
          console.log(error.text);
        }
      );
      const contactsCollections = await addDoc(collection(db, "contacts"), {
        name,
        email,
        subject,
        message,
      });
      setisLoading(false);
      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      console.log("Document written with ID: ", contactsCollections.id);
    }
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          height: isSmallScreen ? "180vh" : "160vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "-10rem",
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
              width: isSmallScreen ? "100%" : "80%",
              margin: "auto",
              color: "#999999",
              position: "relative",
              marginTop: "-1.8rem",
            }}
          >
            Let's embark on a journey together, transforming visionary concepts
            into tangible realities. I'm passionate about creating immersive
            digital experiences, and I look forward to connecting with you to
            bring innovative ideas to life!
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "2rem",
              marginLeft: isSmallScreen ? "0rem" : "4rem",
            }}
          >
            <Grid item xs={6} sm={3}>
              <Box>
                <div style={iconStyleDiv}>
                  <MdOutlineLocationOn style={iconStyle} />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      marginTop: "2rem",
                      fontSize: isSmallScreen ? "1rem" : "",
                    }}
                  >
                    ADDRESS
                  </Typography>
                  <Typography
                    sx={{
                      color: "#999999",
                      marginTop: "2rem",
                      fontSize: isSmallScreen ? "0.8rem" : "",
                    }}
                    variant="body2"
                  >
                    Jericho Ib, OY NG
                  </Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
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
                  sx={{ color: "#999999", marginTop: "2rem" }}
                >
                  dejiportfolio.netlify.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box>
                <div style={iconStyleDiv}>
                  <MdCall style={iconStyle} />
                </div>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    marginTop: "2rem",
                    fontSize: isSmallScreen ? "1rem" : "",
                  }}
                >
                  CONTACT
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#999999",
                    marginTop: "2rem",
                    fontSize: isSmallScreen ? "0.8rem" : "",
                  }}
                >
                  +2349038001805
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box>
                <div style={iconStyleDiv}>
                  <SiMinutemailer style={iconStyle} />
                </div>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    marginTop: "2rem",
                    fontSize: isSmallScreen ? "1rem" : "",
                  }}
                >
                  EMAIL
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#999999",
                    marginTop: "2rem",
                    fontSize: isSmallScreen ? ".8rem" : "",
                  }}
                >
                  olumayokunayo@gmail.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <ToastContainer />
          <Container
            maxWidth="lg"
            sx={{
              display: isSmallScreen ? "" : "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "5rem",
              marginLeft: isSmallScreen ? "" : "2rem",
            }}
          >
            <Box>
              <img
                src={image1}
                alt=""
                style={{
                  width: "100%",
                  height: "600px",
                  display: isSmallScreen ? "none" : "",
                }}
              />
            </Box>
            <form ref={form}>
              {/* <input
                type="text"
                placeholder="Your Name"
                style={{ width: "100%", height: "3rem", padding: "0.5rem" }}
                name="name"
                value={data.name}
                onChange={(e) => handleInputChange(e)}
                required
              /> */}
              <TextField
                sx={{ bgcolor: "#e7f0fe", outline: "none", fontSize: "2rem" }}
                fullWidth
                margin="normal"
                name="name"
                value={data.name}
                onChange={(e) => handleInputChange(e)}
                required
                placeholder="Your Name*"
              />
              <TextField
                sx={{ bgcolor: "#e7f0fe", outline: "none", fontSize: "2rem" }}
                fullWidth
                margin="normal"
                name="email"
                value={data.email}
                onChange={(e) => handleInputChange(e)}
                required
                placeholder="Your Email*"
              />
              <TextField
                sx={{ bgcolor: "#e7f0fe", outline: "none", fontSize: "2rem" }}
                fullWidth
                margin="normal"
                name="subject"
                value={data.subject}
                onChange={(e) => handleInputChange(e)}
                required
                placeholder="Subject*"
              />
              <TextField
                sx={{ bgcolor: "#e7f0fe", outline: "none", fontSize: "2rem" }}
                fullWidth
                multiline
                rows={4}
                maxRows={4}
                margin="normal"
                name="message"
                value={data.message}
                onChange={(e) => handleInputChange(e)}
                required
                placeholder="Message*"
              />
              {/* <textarea
                rows={8}
                style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }}
                placeholder="Message"
                name="message"
                value={data.message}
                onChange={(e) => handleInputChange(e)}
                required
              ></textarea> */}
              <Button
                sx={{
                  bgcolor: "#ffbe22",
                  width: "100%",
                  marginTop: "1rem",
                  color: "#000",
                  borderRadius: "20px",
                  padding: "0.5rem 2rem",
                  "&:hover": {
                    bgcolor: "orangered",
                  },
                }}
                onClick={handleSubmit}
              >
                {isLoading ? "Sending" : "Send Message"}
              </Button>
            </form>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Freelance;
