import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiSololearn } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FcCollaboration } from "react-icons/fc";
import { DiResponsive } from "react-icons/di";
import { SiRobotframework } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { VscSymbolInterface } from "react-icons/vsc";
import { TbBoxMultiple3 } from "react-icons/tb";
import { SiMaterialdesign } from "react-icons/si";
import { GrPerformance } from "react-icons/gr";
const Services = () => {
  const headerStyle = {
    textTransform: "uppercase",
    textAlign: "center",
    color: "#fff",
  };
  const iconStyle = {
    fontSize: "2rem",
    color: "#ffbd38",
  };
  const gridStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    "&:hover": { backgroundColor: "#ffbd38" },
    marginTop: "1rem",
    marginLeft: "1rem",
    padding: "3rem 2rem", 
    borderRadius: "10px", 
    textAlign: "center",
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "3rem", height: "100vh" }} id="services">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: "#fff",
            // width: "50%",
            fontWeight: 600,
            position: "relative",
          }}
        >
          Services
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
          Services
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ marginTop: "2rem", marginLeft: "3rem" }}
        >
          <Grid item xs={2} style={gridStyle}>
            <SiMaterialdesign style={iconStyle} />
            <Typography style={headerStyle}>Web Development</Typography>
          </Grid>
          <Grid item xs={2} style={gridStyle}>
            <VscSymbolInterface style={iconStyle} />
            <Typography style={headerStyle}>
              User Interface (UI) Design
            </Typography>
          </Grid>
          <Grid item xs={2} style={gridStyle}>
            <SiAdobeindesign style={iconStyle} />
            <Typography style={headerStyle}>
              User Experience (UX) Design
            </Typography>
          </Grid>
          <Grid item xs={2} style={gridStyle}>
            <SiRobotframework style={iconStyle} />
            <Typography style={headerStyle}>
              Frontend Frameworks and Libraries
            </Typography>
          </Grid>
          <Grid item xs={2} style={gridStyle}>
            <DiResponsive style={iconStyle} />
            <Typography style={headerStyle}>Responsive Web Design</Typography>
          </Grid>
          <Grid item xs={2} style={gridStyle}>
            <FcCollaboration style={iconStyle} />
            <Typography style={headerStyle}>
              Collaboration with Backend Developers
            </Typography>
          </Grid>
          <Grid item xs={2} style={gridStyle}>
            <AiFillGithub style={iconStyle} />
            <Typography style={headerStyle}>Version Control</Typography>
          </Grid>
          <Grid item xs={2} style={gridStyle}>
            <SiSololearn style={iconStyle} />
            <Typography style={headerStyle}>Continuous Learning</Typography>
          </Grid>
          <Grid item xs={2} style={gridStyle}>
            <TbBoxMultiple3 style={iconStyle} />
            <Typography style={headerStyle}>
              Cross-Browser Compatibility
            </Typography>
          </Grid>
          <Grid item xs={2} style={gridStyle}>
            <SiSololearn style={iconStyle} />
            <Typography style={headerStyle}>
              Performance Optimization
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;
