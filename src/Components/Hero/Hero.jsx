import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/bg.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        maxWidth: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        flexDirection: isMobile ? "column" : "row",
        textAlign: isMobile ? "center" : "left",
        overflow: "hidden", 
        margin: 0,
        padding: 0,
        boxSizing: "border-box", 
      }}
    >
      {/* Blurred Background */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      />
      
      {/* Text Section */}
      <Box
        sx={{
          position: "relative",
          color: "white",
          textAlign: isMobile ? "center" : "left",
          maxWidth: isMobile ? "90%" : "40%",
          fontWeight: "bold",
          px: isMobile ? 2 : 5,
        }}
      >
       <Typography
          variant={isMobile ? "h5" : isTablet ? "h4" : "h2"}
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "start",
            whiteSpace: "pre-line",
          }}
        >
          Taste You {"\n"}  Will {"\n"} Remember
        </Typography>
      </Box>

      {/* Foreground Image Section */}
      <Box
        sx={{
          position: "relative",
          maxWidth: isMobile ? "90%" : "50%",
          mt: isMobile ? 2 : 0,
          px: isMobile ? 2 : 5,
        }}
      >
        <img
          src={backgroundImage}
          alt="Delicious food"
          style={{
            width: "100%",
            borderRadius: "10px",
            boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
            position: "relative",
            zIndex: 1,
            border: "5px solid white",
            display: "block", 
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
