import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Box, Typography } from "@mui/material";
const Stars = ({ raiting }) => {
  const integers = Math.floor(raiting);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {integers > 0 &&
        Array.from(Array(integers)).map((el, index) => (
          <StarIcon sx={{ color: "#e50914" }} key={index} />
        ))}
      <Typography variant="h6" sx={{ color: "#fff" }}>
        {" "}
        {raiting} (Imdb)
      </Typography>
    </Box>
  );
};

export default Stars;
