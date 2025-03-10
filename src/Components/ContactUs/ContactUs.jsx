import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Fade,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AOS from "aos";
import "aos/dist/aos.css";

import contactImage from "../../assets/ContactUs.jpg";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false, mirror: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (EmailJS is commented out)");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfoText = "At Shabri Garden Bistro, immerse yourself in the rich history of Gujarati cuisine and savor the authentic flavors of Gujarati food.";

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4, md: 8 },
        maxWidth: "1440px",
        margin: "0 auto",
        background: "linear-gradient(135deg,rgba(212, 222, 243, 0.73) 0%,rgba(245, 163, 163, 0.73) 100%)",
        minHeight: "100vh",
        // borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <Fade in timeout={1500}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            color: "#007bff",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
          }}
          data-aos="zoom-in"
        >
          Contact Us
        </Typography>
      </Fade>

      <Grid container spacing={4} sx={{ justifyContent: "center", mt: 4 }}>
        {[ 
          { icon: <LocationOnIcon fontSize="large" sx={{ color: "#007bff" }} />, title: "Our Campus", content: "Sector 13, Gandhinagar, Gandhinagar, Gujarat, India" },
          { icon: <PhoneIcon fontSize="large" sx={{ color: "#007bff" }} />, title: "Phone", content: "+91 9855825889" },
          { icon: <EmailIcon fontSize="large" sx={{ color: "#007bff" }} />, title: "Email", content: "welcome@gmail.com" },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="flip-up">
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                backgroundColor: "#fff",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "translateY(-10px) rotate(2deg)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
                },
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                {card.icon}
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#007bff" }}>
                  {card.title}
                </Typography>
                <Typography sx={{ mt: 1 }}>{card.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={6} sx={{ mt: 6 }}>
        <Grid item xs={12} md={6} data-aos="fade-right" sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "Black", mb: 2 }}>
            Contact Info
          </Typography>
          <Typography sx={{ lineHeight: 1.8, color: "Black", mb: 2 }}>
            {contactInfoText}
          </Typography>
          <Box
            component="img"
            src={contactImage}
            alt="Contact Us"
            sx={{
              width: "100%",
              maxWidth: "55%",
              borderRadius: 300, 
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              mt: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} data-aos="fade-left">
          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: "500px", mx: "auto", p: 3, backgroundColor: "#fff", borderRadius: 3, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)" }}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required variant="outlined" sx={{ mb: 2 }} />

            <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required variant="outlined" sx={{ mb: 2 }} />

            <TextField label="Message" name="message" value={formData.message} onChange={handleChange} multiline rows={4} fullWidth required variant="outlined" sx={{ mb: 2 }} />
            
            <Button variant="contained" type="submit" fullWidth sx={{ backgroundColor: "#007bff", "&:hover": { backgroundColor: "#0056b3" } }}>Submit</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
