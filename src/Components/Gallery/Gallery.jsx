import React from "react";
import { Grid, Card, CardMedia, Container, Typography } from "@mui/material";
import Img1 from "../../assets/AboutUsImg.jpg";

const images = [
  Img1,
  Img1,
  Img1,
  Img1,
  Img1,
  Img1
];

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Image Gallery
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" image={src} alt={`Gallery image ${index + 1}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
