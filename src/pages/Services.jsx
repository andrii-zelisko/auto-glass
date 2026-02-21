import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {services.map((service, i) => {
        const Icon = service.icon;

        return (
          <Grid item size={{ xs:12, sm:6, md:3 }} key={i}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                textAlign: "center",
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6
                }
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2
                  }}
                >
                  <Icon sx={{ fontSize: 36, color: "white" }} />
                </Box>

                <Typography variant="h6">{service.title}</Typography>

                <Typography variant="body2" sx={{ mt: 1 }}>
                  {service.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}