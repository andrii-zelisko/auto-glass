import { Box, Typography, Button, Container } from "@mui/material";
import heroImage from "../assets/glass_repair.png";

export default function Hero() {
  return (
    <Box sx={{
      backgroundColor: "primary.main",
      color: "white",
      py: 10,
      textAlign: "center",
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Container>
        <Typography variant="h3">Автоскло Зелена</Typography>

        <Typography variant="h6" sx={{ opacity: 0.9, mt: 2 }}>
          Продаж • Ремонт • Заміна автоскла будь-якої складності
        </Typography>

        <Button variant="contained" color="secondary" href="#contact" sx={{ mt: 4 }}>
          Зв’язатися
        </Button>
      </Container>
    </Box>
  );
}