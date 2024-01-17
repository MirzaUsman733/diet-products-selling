'use client'
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link'
const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const renderNavItems = () => (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        {/* Add the search input */}
        <div>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </div>
        <InputBase
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          className="text-white"
        />
      </div>
      <Button color="inherit" component={Link} href="/">
        Home
      </Button>
      <Button color="inherit" component={Link} href="/about">
        About
      </Button>
      <Button color="inherit" component={Link} href="/services">
        Services
      </Button>
      <Button color="inherit" component={Link} href="/contact">
        Contact
      </Button>
    </div>
  );

  return (
    <AppBar position="static" className="bg-white text-black">
      <div className="container mx-auto">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className="flex-grow">
            Ketogenic
          </Typography>
          {!drawerOpen && renderNavItems()}
        </Toolbar>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          className="w-1/2"
        >
          <div className="mt-8 mx-auto">
            <div className="flex items-center space-x-2">
              {/* Add the search input */}
              <div>
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
              </div>
              <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                className="text-white"
              />
            </div>
            <List className="mt-4">
              <ListItem component={Link} href="/" onClick={handleDrawerClose}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem component={Link} href="/about" onClick={handleDrawerClose}>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem component={Link} href="/services" onClick={handleDrawerClose}>
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem component={Link} href="/contact" onClick={handleDrawerClose}>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </AppBar>
  );
};

export default Navbar;
