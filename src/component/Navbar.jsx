import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "center", gap: 3 }}>
        <Typography variant="h6">Автоскло Зелена</Typography>
        <Button color="inherit" href="#about">Про нас</Button>
        <Button color="inherit" href="#services">Послуги</Button>
        <Button color="inherit" href="#advantages">Переваги</Button>
        <Button color="inherit" href="#brands">Виробники</Button>
        <Button color="inherit" href="#gallery">Галерея</Button>
        <Button color="inherit" href="#contact">Контакти</Button>
      </Toolbar>
    </AppBar>
  );
}