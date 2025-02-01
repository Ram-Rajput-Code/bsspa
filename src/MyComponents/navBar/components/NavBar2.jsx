import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Container,
} from "@mui/material";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      color=""
      elevation={0}
      sx={{ background: "rgba(255, 255, 255, 0.81)" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <img src="./images/logo.png" alt="404" width="250px" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              {/* Using Bootstrap utility classes for hover */}
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit", // Active link color
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                About Us
              </NavLink>
              <NavLink
                to="/facilities"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                Facilities
              </NavLink>
              <NavLink
                to="/admission"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                Admission
              </NavLink>
              <NavLink
                to="/activities"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                Activities
              </NavLink>
              <NavLink
                to="/scolastic"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                Scolastic & CO-Scolastic
              </NavLink>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={closeMenu}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Transparent dark background
            width: "250px",
            color: "white", // White text inside drawer
          },
        }}
      >
        <List>
          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Home
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/about"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              About Us
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/facilities"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Facilities
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/admission"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Admission
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/activities"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Activities
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/scolastic"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Scolastic & CO-Scolastic
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Nav;
