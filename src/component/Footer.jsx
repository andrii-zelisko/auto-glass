import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 4, textAlign: "center" }}>
      <Typography>© 2026 Автоскло Зелена — Всі права захищені</Typography>
    </Box>
  );
}