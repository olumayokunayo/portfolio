import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  const headerStyle = {
    color: "#fff",
  };
  const iconStyle = {
    color: "#a3a3a3",
  };
  const iconDivStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "3rem",
    width: "3rem",
    borderRadius: " 50%",
    backgroundColor: "#1a1a1a",
  };

  const year = new Date().getFullYear();
  return (
    <Container>
      <Container
        maxWidth="lg"
        sx={{
          height: "80vh",
          marginTop: "10rem",
          display: "flex",
          alignItems: "center",
          fontSize: "4rem",
        }}
      >
        {" "}
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <Typography variant="h5" style={headerStyle}>
              About
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              <Typography sx={{ color: "#a3a3a3", marginBottom: "2rem" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={iconDivStyle}>
                  <TwitterIcon style={iconStyle} />
                </div>
                <div style={iconDivStyle}>
                  <FacebookIcon style={iconStyle} />
                </div>
                <div style={iconDivStyle}>
                  <InstagramIcon style={iconStyle} />
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5" style={headerStyle}>
              Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <ArrowRightAltIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>Home</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <ArrowRightAltIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>About</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <ArrowRightAltIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>Services</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <ArrowRightAltIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>Projects</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <ArrowRightAltIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>Contact</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h5" style={headerStyle}>
              Have a Questions?
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <LocationOnIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <CallIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>
                  +2 392 3929 210
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Typography sx={{ color: "#a3a3a3", textAlign: "center" }}>
        This portfolio is made with ❤️ {year}.
      </Typography>
    </Container>
  );
};

export default Footer;
