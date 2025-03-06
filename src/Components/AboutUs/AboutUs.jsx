import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import contactImage from "../../assets/AboutUsImg.jpg";

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#6d5b4b" }}
      >
        ABOUT US
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2 }}>
            <img
              src={contactImage}
              alt="About Us"
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ color: "#4a4a4a", lineHeight: 1.7 }}>
          At Shabri Garden Bistro, immerse yourself in the rich history of Gujarati cuisine and savor the authentic flavors of Gujarati food.We offer a wide range of high-quality food by keeping in mind the security measure.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;