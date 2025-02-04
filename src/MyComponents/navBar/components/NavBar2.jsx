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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [anchorElFacilities, setAnchorElFacilities] = useState(null);
  const [anchorElAdmission, setAnchorElAdmission] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElAbout(null);
    setAnchorElFacilities(null);
    setAnchorElAdmission(null);
  };

  // Mobile dropdown toggle handlers
  const toggleAboutDropdown = () => setIsAboutOpen(!isAboutOpen);
  const toggleFacilitiesDropdown = () => setIsFacilitiesOpen(!isFacilitiesOpen);
  const toggleAdmissionDropdown = () => setIsAdmissionOpen(!isAdmissionOpen);

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
              {/* Home link */}
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                Home
              </NavLink>

              {/* About Us dropdown for desktop */}
              <div
                onMouseEnter={(e) => handleMenuOpen(e, setAnchorElAbout)}
                onMouseLeave={handleMenuClose}
              >
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
                  <ArrowDropDownIcon />
                </NavLink>
                <Menu
                  anchorEl={anchorElAbout}
                  open={Boolean(anchorElAbout)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleMenuClose,
                  }}
                >
                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    {" "}
                    <MenuItem onClick={handleMenuClose}>About School</MenuItem>
                  </NavLink>
                  <MenuItem onClick={handleMenuClose}>Founder of BSS</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Founder of School </MenuItem>
                  <MenuItem onClick={handleMenuClose}>Secretary Message</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Principal Message</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Members</MenuItem>
                </Menu>
              </div>

              {/* Facilities dropdown for desktop */}
              <div
                onMouseEnter={(e) => handleMenuOpen(e, setAnchorElFacilities)}
                onMouseLeave={handleMenuClose}
              >
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
                  <ArrowDropDownIcon />
                </NavLink>
                <Menu
                  anchorEl={anchorElFacilities}
                  open={Boolean(anchorElFacilities)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleMenuClose,
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>Faculties</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Infrastructures and Facilities</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Our Praxis</MenuItem>
                </Menu>
              </div>

              {/* Admission dropdown for desktop */}
              <div
                onMouseEnter={(e) => handleMenuOpen(e, setAnchorElAdmission)}
                onMouseLeave={handleMenuClose}
              >
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
                  <ArrowDropDownIcon />
                </NavLink>
                <Menu
                  anchorEl={anchorElAdmission}
                  open={Boolean(anchorElAdmission)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleMenuClose,
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>Academic</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Procedure and Withdrawal</MenuItem>
                  <MenuItem onClick={handleMenuClose}>School Rules</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Fees Deposition Rules</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Reg. Form Class 9 and 11</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Reg. Form Class 10 and 12</MenuItem>                  
                  <MenuItem onClick={handleMenuClose}>Student Details</MenuItem>
                </Menu>
              </div>

              {/* Other links */}
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
        className="hide"
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

          {/* About Us dropdown for mobile */}
          <ListItem button onClick={toggleAboutDropdown}>
            <span style={{ color: "white", padding: "5px", cursor: "pointer" }}>
              About Us
              <ArrowDropDownIcon />
            </span>
          </ListItem>
          {isAboutOpen && (
            <List sx={{ position: "relative", left: "50px" }}>
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
                  About School
                </NavLink>
              </ListItem>
              <ListItem button onClick={closeMenu}>
                <NavLink
                  to="/about#team"
                  className="nav-link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Team
                </NavLink>
              </ListItem>
              <ListItem button onClick={closeMenu}>
                <NavLink
                  to="/about#careers"
                  className="nav-link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Careers
                </NavLink>
              </ListItem>
            </List>
          )}

          {/* Facilities dropdown for mobile */}
          <ListItem button onClick={toggleFacilitiesDropdown}>
            <span style={{ color: "white", padding: "5px", cursor: "pointer" }}>
              Facilities
              <ArrowDropDownIcon />
            </span>
          </ListItem>
          {isFacilitiesOpen && (
            <List sx={{ position: "relative", left: "50px" }}>
              <ListItem button onClick={closeMenu}>
                <NavLink
                  to="/facilities#library"
                  className="nav-link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Library
                </NavLink>
              </ListItem>
              <ListItem button onClick={closeMenu}>
                <NavLink
                  to="/facilities#sports"
                  className="nav-link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Sports
                </NavLink>
              </ListItem>
              <ListItem button onClick={closeMenu}>
                <NavLink
                  to="/facilities#lab"
                  className="nav-link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Lab
                </NavLink>
              </ListItem>
            </List>
          )}

          {/* Admission dropdown for mobile */}
          <ListItem button onClick={toggleAdmissionDropdown}>
            <span style={{ color: "white", padding: "5px", cursor: "pointer" }}>
              Admission
              <ArrowDropDownIcon />
            </span>
          </ListItem>
          {isAdmissionOpen && (
            <List sx={{ position: "relative", left: "50px" }}>
              <ListItem button onClick={closeMenu}>
                <NavLink
                  to="/admission#process"
                  className="nav-link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Process
                </NavLink>
              </ListItem>
              <ListItem button onClick={closeMenu}>
                <NavLink
                  to="/admission#requirements"
                  className="nav-link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Requirements
                </NavLink>
              </ListItem>
              <ListItem button onClick={closeMenu}>
                <NavLink
                  to="/admission#fees"
                  className="nav-link"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Fees
                </NavLink>
              </ListItem>
            </List>
          )}

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
