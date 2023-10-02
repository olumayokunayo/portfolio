import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { LinearProgress } from "@mui/material";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import { redirect } from "react-router-dom";

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
          minHeight: "80vh",
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
              textAlign: "center",
              marginTop: "-2rem",
              marginBottom: "3rem",
            }}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
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
