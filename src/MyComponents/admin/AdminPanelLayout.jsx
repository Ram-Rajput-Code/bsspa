import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
} from "@mui/material";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import InsertPhotoOutlined from "@mui/icons-material/InsertPhotoOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: drawerWidth,
        height: "100vh",
        backgroundColor: "#1976d2",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        p: 2,
      }}
    >
      <div className="footerlogo-admin">
        <img src="/images/logofooter.png" alt="Logo" />
        <div className="ftrlogotext-admin">
          <span>
            BHARAT Sevashram Sangha <br />
          </span>
          <span>Pranavananda Academy </span>
        </div>
      </div>

      {/* Navigation List */}
      <List>
        {[
          { text: "Home", icon: <HomeIcon />, path: "/admin" },
          { text: "Home Slider", icon: <SlideshowIcon />, path: "/admin/home-slider" },
          { text: "About Banner", icon: <InsertPhotoOutlined />, path: "/admin/about-banner" },
          { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
          { text: "Logout", icon: <LogoutIcon />, path: "/admin/logout" },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ color: "white" }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              {/* Fix for ListItemText Color */}
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {item.text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const AdminPanelLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box sx={{ flexGrow: 1, ml: `${drawerWidth}px` }}>
        {/* AppBar */}
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor:"gray"
          }}
        >
          <Toolbar>
            <Typography variant="h6">Admin Panel</Typography>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box component="main" sx={{ p: 3, mt: 8 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminPanelLayout;
