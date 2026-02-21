import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions
} from "@mui/material";
import { glassCompanies } from "../data/siteData";

export default function GlassCompanies() {
  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {glassCompanies.map((company, i) => (
        <Grid item size={{ xs:12, sm:6, md:4 }} key={i}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 3 }}>

            <CardMedia
              component="img"
              height="160"
              image={company.image}
              alt={company.name}
              sx={{ objectFit: "contain", p: 2 }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{company.name}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {company.description}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
              <Button
                variant="contained"
                size="small"
                href={company.url}
                target="_blank"
                rel="noopener"
              >
                Офіційний сайт
              </Button>
            </CardActions>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
}