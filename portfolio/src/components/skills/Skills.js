import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LinearProgress } from "@mui/material";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
const SkillProgressBar = ({ skill, percentage }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff", marginBottom: "0.5rem" }}>
          {skill}
        </Typography>
        <Typography variant="h6" sx={{ color: "#fff", marginBottom: "0.5rem" }}>
          {percentage}%
        </Typography>
      </div>
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{ height: 10, backgroundColor: "#333" }}
        color="warning"
      />
    </div>
  );
};
const Skills = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const handleGit = () => {
    window.location.href = "https://github.com/olumayokunayo";
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: isSmallScreen ? "100vh" : "100vh",
        }}
        id="skills"
      >
        <Container>
          {" "}
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: "#fff",
              // width: "50%",
              fontWeight: 600,
              position: "relative",
            }}
          >
            My Skills
          </Typography>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              color: "#1a1a1a",
              marginTop: "-3.5rem",
              position: "relative",
              fontWeight: 600,
              letterSpacing: ".5rem",
              zIndex: -1,
            }}
          >
            Skills
          </Typography>
          <Typography
            sx={{
              color: "#999999",
              margin: "auto",
              textAlign: "center",
              marginTop: "-2rem",
              marginBottom: "3rem",
              width: isSmallScreen ? "100%" : "80%",
            }}
          >
            Empowered with a diverse skill set, I specialize in crafting
            seamless and responsive frontend solutions. Proficient in
            cutting-edge technologies, I bring creativity and precision to every
            project, ensuring a user-centric and engaging digital experience.
          </Typography>
          <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
            <Grid item xs={6}>
              <SkillProgressBar skill="JavaScript" percentage={80} />
            </Grid>
            <Grid item xs={6}>
              <SkillProgressBar skill="CSS3" percentage={90} />
            </Grid>
            <Grid item xs={6}>
              <SkillProgressBar skill="React JS" percentage={80} />
            </Grid>
            <Grid item xs={6}>
              <SkillProgressBar skill="HTML5" percentage={90} />
            </Grid>
            <Grid item xs={6}>
              <SkillProgressBar skill="Node JS" percentage={50} />
            </Grid>
            <Grid item xs={6}>
              <SkillProgressBar skill="Firebase" percentage={70} />
            </Grid>
          </Grid>
          <Button
            sx={{
              bgcolor: "#ffbd38",
              "&:hover": { bgcolor: "#ffbd38" },
              borderRadius: "20px",
              color: "#000",
              marginTop: "2rem",
              marginBottom: "1rem",
              padding: "0.5rem 1.5rem",
              //   display: "flex",
              gap: "1rem",
            }}
            onClick={handleGit}
          >
            <UseAnimations animation={github} size={30} color="#fff" />
            <span style={{ textTransform: "none" }}>My Projects</span>
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Skills;
