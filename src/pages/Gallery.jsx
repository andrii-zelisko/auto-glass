import { Grid, Card, CardMedia } from "@mui/material";
import { galleryImages } from "../data/siteData";

export default function Gallery() {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {galleryImages.map((src, i) => (
        <Grid item size={{ xs:12, sm:6, md:4 }} key={i}>
          <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
            <CardMedia
              component="img"
              height="220"
              image={src}
              alt="gallery"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}