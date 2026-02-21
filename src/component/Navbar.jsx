import { AppBar, Toolbar, Button, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Автоскло Зелена</Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component="a" href="#about">Про нас</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#services">Послуги</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#advantages">Переваги</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#brands">Виробники</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#gallery">Галерея</MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#contact">Контакти</MenuItem>
            </Menu>
          </>
        ) : (
          <Toolbar sx={{ gap: 3 }}>
            <Button color="inherit" href="#about">Про нас</Button>
            <Button color="inherit" href="#services">Послуги</Button>
            <Button color="inherit" href="#advantages">Переваги</Button>
            <Button color="inherit" href="#brands">Виробники</Button>
            <Button color="inherit" href="#gallery">Галерея</Button>
            <Button color="inherit" href="#contact">Контакти</Button>
          </Toolbar>
        )}
      </Toolbar>
    </AppBar>
  );
}