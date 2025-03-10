import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const UnderMaintenance = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 50000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(20, 19, 19, 0.55)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        animation: `${fadeIn} 1.5s ease-in-out`,
      }}
    >
      <img
        src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
        alt="Maintenance Logo"
        style={{
          width: "clamp(80px, 20vw, 160px)",
          height: "auto",
          marginBottom: "22px",
          animation: `${pulse} 2s infinite`,
        }}
      />
      <Typography variant="h2" fontWeight="bold" color="yellow" sx={{ fontSize: { xs: "20px", sm: "24px", md: "40px", lg: "60px" }, mt: 2 }}>
        Site Under Maintenance...
      </Typography>
      <Typography variant="h4" fontWeight="bold" color="white" sx={{ fontSize: { xs: "14px", sm: "16px", md: "25px", lg: "30px" }, mt: 2 }}>
        We're working hard to improve the user experience. Stay tuned!
      </Typography>
    </Box>
  );
};

export default UnderMaintenance;
