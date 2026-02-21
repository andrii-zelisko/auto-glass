import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { advantages } from "../data/siteData";

export default function Advantages() {
  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {advantages.map((item, i) => {
        const Icon = item.icon;

        return (
          <Grid item size={{ xs:12, sm:6, md:4 }} key={i}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
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
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2
                  }}
                >
                  <Icon sx={{ color: "white", fontSize: 32 }} />
                </Box>

                <Typography variant="h6">
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}