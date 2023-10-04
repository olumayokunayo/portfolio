import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "@fontsource/roboto/500.css";
import "./Header.css";

const pages = ["Home", "About", "Services", "Skills", "Contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ bgcolor: "#000" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between" }}
          className="smooth-scroll"
        >
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={handleOpenNavMenu}
              color="#222"
            >
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    component="a"
                    href={`#${page.toLowerCase()}`}
                    sx={{
                      color: "#000",
                    }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h4"
              noWrap
              sx={{
                ml: 2,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
                letterSpacing: "-0.05rem",
              }}
            >
              DEJI
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {pages.map((page) => (
              <Button
                component="a"
                href={`#${page.toLowerCase()}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  ml: 2,
                  color: "#fff",
                  borderRadius: 0,
                  "&:hover": { borderBottom: "1px solid #ffbd38" },
                  display: { xs: "none", md: "flex" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
