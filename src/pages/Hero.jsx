import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 10, textAlign: "center" }}>
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