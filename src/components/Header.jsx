import React, { useState } from 'react';
import {
  AppBar, Toolbar, Button, Box,
  IconButton, Drawer, List, ListItem, ListItemText, Typography, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import logo from '/logo.png';

const navItems = [
  { label: 'VC Message', path: '/' },
  { label: 'HOD', path: '/hod' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Programs', path: '/programs' },
  { label: 'News', path: '/news' },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Departmental Portal
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* HEADER NAVBAR */}
      <AppBar component="nav" position="static" sx={{ backgroundColor: 'green' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* LEFT SIDE: Icon + Departmental Portal */}
          <Box display="flex" alignItems="center">
            <GraduationCap size={28} />
            <Typography variant="h6" sx={{ ml: 1 }}>
              Departmental Portal
            </Typography>
          </Box>

          {/* DESKTOP NAV LINKS */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? '#FFD700' : 'white',
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* MOBILE MENU ICON */}
          <Box sx={{ display: { sm: 'none' } }}>
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* LOGO + UNIVERSITY NAME SECTION */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 2,
          px: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          textAlign: 'center'
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={logo}
            alt="University Logo"
            style={{ height: 130, width: 'auto' }}
          />
        </Box>

        {/* Divider (only show on larger screens) */}
        <Divider
          sx={{
            display: { xs: 'none', sm: 'block' },
            flexGrow: 1,
            mx: 2,
            borderBottomWidth: 2,
          }}
        />

        {/* University Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            mt: { xs: 1, sm: 0 },
            fontSize: { xs: '1rem', sm: '1.25rem' },
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          Fatimah Jinnah Women University
        </Typography>

        {/* Right Divider (only on large) */}
        <Divider
          sx={{
            display: { xs: 'none', sm: 'block' },
            flexGrow: 1,
            mx: 2,
            borderBottomWidth: 2,
          }}
        />
      </Box>
    </>
  );
};

export default Header;
