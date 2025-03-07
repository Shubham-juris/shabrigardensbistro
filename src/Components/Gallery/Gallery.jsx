import React from "react";
import { Grid, Card, CardMedia, Container, Typography } from "@mui/material";
import Img1 from "../../assets/GalleryImg/Img1.jpg";
import Img2 from "../../assets/GalleryImg/Img2.jpg";
import Img3 from "../../assets/GalleryImg/Img3.jpg";
import Img4 from "../../assets/GalleryImg/Img4.jpg";
import Img5 from "../../assets/GalleryImg/Img5.jpg";
import Img6 from "../../assets/GalleryImg/Img6.jpg";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6
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
