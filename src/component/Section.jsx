import { Container, Typography } from "@mui/material";

export default function Section({ id, title, children }) {
  return (
    <Container id={id} sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {children}
    </Container>
  );
}