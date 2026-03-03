import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/brands/glass_repair.png";

export default function Hero() {
  return (
    <Box sx={{
      backgroundColor: "primary.main",
      color: "white",
      textAlign: "center",
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", p: 4, py: 20}}>
        <Typography variant="h3">Автоскло Зелена</Typography>

        <Typography variant="h6" sx={{ opacity: 0.9, mt: 2 }}>
          Продаж • Ремонт • Заміна автоскла будь-якої складності
        </Typography>

        <Button variant="contained" color="secondary" href="#contact" sx={{ mt: 4 }}>
          Зв’язатися
        </Button>
      </Box>
    </Box>
  );
}