import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const SidebarCard = ({ title, bgColor, children }) => {
  return (
    <Card sx={{ p: 2, bgcolor: bgColor, mb: 2 }}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      {children}
    </Card>
  );
};

export default SidebarCard;
